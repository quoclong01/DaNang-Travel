import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
import ContactForm from './partials/ContactForm';
import Image from '../../../src/assets/index';

const Contact = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main className="contact-page">
        <div className="contact-map">
          <img src={Image.Contact} alt="contact-img"/>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
