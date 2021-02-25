//import App from 'next/app'
import React from 'react'
import Layout from '../components/layout'
import '../styles/global.css'
import '../styles/screen.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
