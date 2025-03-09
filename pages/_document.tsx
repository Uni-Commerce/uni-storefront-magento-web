import createCache from '@emotion/cache'
import { Html, Head, Main, NextScript } from 'next/document'
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v15-pagesRouter'
import type { DocumentProps } from 'next/document'

import { cacheConf } from '@/config/cache.conf'
import { nextConf } from '@/config/next.conf'

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: React.ReactElement<any>[]
}

const Document = (props: MyDocumentProps) => {
  return (
    <Html lang="en">
      <Head>
        <meta name="charset" content="utf-8" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src={`${nextConf.basePath}/js/jquery.min.js`} defer />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: any) => {
  const finalProps = await documentGetInitialProps(ctx, {
    emotionCache: createCache(cacheConf)
  })

  return finalProps
}

export default Document
