import React from 'react';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Ads from '../../components/Ads';
import ScrollToTop from '../../components/ScrollToTop';
import Top from '../../components/Top';
import Subcribe from '../../components/Subcribe';

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero />
      <Ads />
      <Top />
      <Subcribe />
      <Footer />
    </>
  );
};

export default Home;
