import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/qc1.png';
import img2 from '../assets/qc2.png';
export default function Top() {
  const data = [
    {
      icon: img1,
    },
    {
      icon: img2,
    },
  ];
  return (
    <Section id='ads'>
      <div className='container'>
        <div className='imgs'>
          {data.map((service, index) => {
            return <img src={service.icon} alt='' />;
          })}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 4rem 0;
  .imgs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    margin: 2rem 2rem;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .destinations {
      grid-template-columns: 1fr;
    }
  }
`;
