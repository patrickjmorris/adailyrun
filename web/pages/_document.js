import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    return (
      <Html>
        <Head >

        </Head >
        <body>
          <Main />
          <NextScript />

          {/**
             * Ghost outputs important scripts and data with this tag - it should
             * always be the very last thing before the closing body tag
            **/}

        </body>
      </Html>
    )
  }
}

export default MyDocument
