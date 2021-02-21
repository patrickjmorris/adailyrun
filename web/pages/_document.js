import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        {/* <link
            rel="preload"
            href="https://rsms.me/inter/inter.css"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          /> */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
