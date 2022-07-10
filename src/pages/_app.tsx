import ResetCSS from 'style/ResetCSS'
import Script from 'next/script'
import '../style/index.css'
import { ToastListener } from 'contexts/ToastsContext'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore, persistor } from 'store'
import { NextPage } from 'next'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Providers from '../Providers'
import GlobalStyle from '../style/Global'
import useBaseQueryClient from 'hooks/queries/useBaseQueryClient'

function GlobalHooks() {
  return null
}

function MyApp(props: AppProps) {
  const { pageProps } = props
  const store = useStore(pageProps.initialReduxState)
  const queryClient = useBaseQueryClient()
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <meta name="description" content="description" />
        <meta name="theme-color" content="#1FC7D4" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content="-" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <title>TEST</title>
        <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Providers store={store}>
            <GlobalHooks />
            <ResetCSS />
            <GlobalStyle />
            <PersistGate loading={null} persistor={persistor}>
              <App {...props} />
            </PersistGate>
          </Providers>
        </Hydrate>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Script
        strategy="afterInteractive"
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTAG}');
          `,
        }}
      />
    </>
  )
}

type NextPageWithLayout = NextPage & {
  Layout?: React.FC
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// const ProductionErrorBoundary = process.env.NODE_ENV === 'production' ? ErrorBoundary : Fragment

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout || Fragment
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <ToastListener />
    </>
  )
}

export default MyApp
