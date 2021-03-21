//import App from 'next/app';
import '../styles/global.scss';
import React from 'react'
import Header from '../layout/Header'
import Contacts from '../layout/Contacts'

function MyApp({ Component, pageProps }) { 
    return (
        <>                
          <Component {...pageProps}/>
        </>
        )
  }
export default MyApp;




  