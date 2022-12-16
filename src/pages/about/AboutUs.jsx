import React from 'react';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import SectionAbout from './partials/SectionAbout';
import Header from '../../components/Header';

const AboutUs = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <SectionAbout />
      <Footer />
    </>
  );
};

export default AboutUs;
