import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  createMigrate,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import naviReducer from 'store/navi/reducer'
import common from 'store/common'

// import limitOrders from './limitOrders/reducer'

const PERSISTED_KEYS: string[] = ['navi']

const migrations = {
  0: (state) => {
    // migration add userPredictionChainlinkChartDisclaimerShow
    return {
      ...state,
      user: {
        ...state?.user,
        userPredictionChainlinkChartDisclaimerShow: true,
      },
    }
  },
  1: (state) => {
    return {
      ...state,
    }
  },
}

const persistConfig = {
  key: 'primary',
  whitelist: PERSISTED_KEYS,
  blacklist: [''],
  storage,
  version: 1,
  migrate: createMigrate(migrations, { debug: false }),
}

// const ListsConfig = {
//   key: 'lists',
//   version: 1,
//   serialize: false,
//   deserialize: false,
//   storage: IndexedDBStorage('lists'),
// }

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    navi: naviReducer,
    common,
  }),
)

// eslint-disable-next-line import/no-mutable-exports
let store: ReturnType<typeof makeStore>

export function makeStore(preloadedState = undefined) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
  })
}

export const initializeStore = (preloadedState = undefined) => {
  let _store = store ?? makeStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) {
    store = _store
  }

  return _store
}

store = initializeStore()

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

export const persistor = persistStore(store, undefined, () => {
  //store.dispatch(updateVersion())
})

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState])
}
