import React from 'react';
import Navbar from '../Home/Navbar';
import Know from '../Home/Know';
import Whyus from '../Home/Whyus';
import Popular from '../Home/Popular';
import Market from '../Home/Market'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from '../Home/About';
import Footer from '../Home/Footer';


import '../main.scss'


const Home =() => {
  return (
    <>
      <Navbar />
      <Know />
      <Whyus />
      <Popular />
      <Market />
      <About />
      <Footer />
    </>
  );
}


export default Home;

