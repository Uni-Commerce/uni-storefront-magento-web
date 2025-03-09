import Head from 'next/head'
import type { AppProps } from 'next/app'

import { cacheConf } from '@/config/cache.conf'
import { uniTheme } from '@/config/theme.conf'
import EmotionRegistry from '@/lib/emotion/registry'

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Uni Commerce Store</title>
      </Head>
      <EmotionRegistry
        cacheOptions={cacheConf}
        emotionTheme={uniTheme.emotionTheme}
        muiTheme={uniTheme.muiTheme}
      >
        <Component {...pageProps} />
      </EmotionRegistry>
    </>
  )
}

export default App
