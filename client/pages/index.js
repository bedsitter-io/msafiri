import React from 'react'
import Head from 'next/head'

import Nav from '../components/nav'
import Header from '../components/homeHeader'
import Footer from '../components/homeFooter'
import SafariList from './SafariList'

const Home = () => {
  return (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body style={{overflow: 'auto', width: '100%', margin: 'auto'}}>
    <Nav />
    <Header />
    <main>
      <SafariList />
     </main>
     <Footer />
     </body>
   </>
  );
}

export default Home
