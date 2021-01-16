//import App from 'next/app';
import '../styles/global.scss';
import React from 'react'
import Header from '../layout/Header'
import Contacts from '../layout/Contacts'

function MyApp({ Component, pageProps }) { 
    return (
        <>                
          <Header/>
          <Component {...pageProps}/>
          <Contacts phone="973382281" email="mazzeimarcosv@gmail.com"/>  
        </>
        )
  }
export default MyApp;




  