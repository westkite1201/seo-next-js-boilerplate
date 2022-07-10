import { BigNumber } from '@ethersproject/bignumber'
import orderBy from 'lodash/orderBy'
import { createSelector } from '@reduxjs/toolkit'

const selectMinBetAmount = (state: any) => state.minBetAmount

export const getMinBetAmountSelector = createSelector([selectMinBetAmount], BigNumber.from)
