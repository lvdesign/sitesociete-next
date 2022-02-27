import 'materialize-css/dist/css/materialize.min.css'
//import 'materialize-css/dist/js/materialize.min.js'
import '../styles/globals.css'
//
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Layout from '../components/Layout';

function useResetHistory() {
  const router = useRouter()
  useEffect(() => {
    
    document.addEventListener("snipcart.ready", () => {
      Snipcart.events.on('snipcart.initialized', (snipcartState) => {
        // use `router.asPath` instead of `router.pathname`
        router.replace(router.asPath)
      });
    });

    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }


  }, [])
}

// Base <Component {...pageProps} />
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
