import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
import BlogList from '../../components/BlogList';

const Bloglist = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Bloglist;
