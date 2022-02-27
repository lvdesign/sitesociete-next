import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="/favicon-32x32.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#43a047" />
          <meta name="theme-color" content="#43a047" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />

          {/* <!--Import Google Icon Font--> */}
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          {/* <!-- Compiled and minified CSS --> */}
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" /> */}
          {/* <!-- Compiled and minified JavaScript --> */}
          {/* <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> */}

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
        </Head>
        
        <body>
          <Main />
          <NextScript />         
          
          {process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
          <div hidden id="snipcart" toto data-api-key="Zjk4ZjI4Y2ItMzY5OS00MDM3LTljNTEtY2Y1MTFkYTE5MTk5NjM2NjY1NDcwNTQxMDc2Mjcz" /> 

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" async/>
          
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" async/>
          
          <script 
          src="https://maps.google.com/maps/api/js?key=AIzaSyD9aQETU7fgFdiTaePwg4pvgVcPJvk7zAY&callback=regular_map" 
          async />


        </body>
      </Html>
      )
  }
}
{/* // process.env.NEXT_PUBLIC_SNIPCART_API_KEY*/}
export default MyDocument 