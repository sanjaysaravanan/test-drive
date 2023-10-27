import Document, { Html, Head, Main, NextScript } from 'next/document'
 
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
            crossOrigin='anonymous'
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" 
            rel="stylesheet" 
            crossOrigin="anonymous"
          >
          </link>
          <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
            crossOrigin="anonymous" 
            referrerpolicy="no-referrer"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
 
export default MyDocument