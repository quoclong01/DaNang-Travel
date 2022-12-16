import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollToTop';
import BlogDetail from '../../components/BlogDetail';

const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Header />
      <BlogDetail />
      <Footer />
    </div>
  );
};

export default Blog;
