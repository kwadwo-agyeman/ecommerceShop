import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header';
import Banner1 from './components/Banner/Banner1';
import Banner2 from './components/Banner/Banner2';
import Banner3 from './components/Banner/Banner3';
import Banner4 from './components/Banner/Banner4';
import Footer from './components/Footer';
import '../src/Home.css'
function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <br/><br/>
      <Banner1/>
      <br /><br />
      <Banner2/>
      <br /><br />
      <Banner3/>
      <br /><br />
      <Banner4/>
      <br /><br />
      <Footer/>
    </div>
  )
}

export default Home
