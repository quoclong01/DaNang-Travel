import React from 'react';
import AboutTeam from './AboutTeam';
import Image from '../../../assets/index';

const SectionAbout = () => {
  return (
    <main className="about-page">
      <div className="container">
        <div className="about-banner">
          <img src={Image.AboutBanner} alt="banner" />
        </div>
      </div>
      <AboutTeam />
    </main>
  );
};

export default SectionAbout;
