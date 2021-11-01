import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDoc extends Document {
  render(): JSX.Element {
    return (
      <Html className="bg-gray-800 text-white">
        <Head></Head>
        <body>
          <Main></Main>
          <div id="Modal"></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDoc
