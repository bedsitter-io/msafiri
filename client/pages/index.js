import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import ButtonAppBar from '../components/navbar'
import SafariList from './SafariList'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <ButtonAppBar />

    <div className="hero">
      <h1 className="title">Welcome to Msafiri</h1>
      <p className="description">
        A Traveller's Companion
      </p>
      <SafariList />
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
