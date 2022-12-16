import React from 'react';
import styled from 'styled-components';
import Image from '../assets/index';
import Slider from 'react-slick';
import { useTranslation } from "react-i18next";
export default function Hero() {
  const {t} = useTranslation()
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  return (
    <Section id='hero'>
      <div className='hero-slider'>
        <Slider {...settings}>
          <div className='hero-background'>
            <img src={Image.HeroImage1} alt='banner' />
          </div>
          <div className='hero-background'>
            <img src={Image.HeroImage2} alt='banner' />
          </div>
          <div className='hero-background'>
            <img src={Image.HeroImage3} alt='banner' />
          </div>
        </Slider>
        <div className='hero-content'>
          <h1>{t('home.find_your_next_stay')}</h1>
          <p>{t('home.get_best')}</p>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  .hero-slider {
    height: 700px;
  }
  .hero-background {
    img {
      height: 700px;
      width: 100%;
      filter: brightness(60%);
      object-fit: cover;
    }
  }
  .hero-content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h1 {
      font-size: 64px;
      font-color: #ffffff;
    }
    p {
      margin-top: 0.5rem;
      font-size: 18px;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    .hero-slider {
      height: 400px;
    }
    .hero-background {
      img {
        height: 400px;
        width: 100%;
        filter: brightness(60%);
        object-fit: cover;
      }
    }
  }
`;
