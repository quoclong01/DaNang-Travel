import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/Long.jpg';
import img2 from '../assets/Huy.jpg';
import img3 from '../assets/Linh.png';
import img4 from '../assets/Phuc.png';
import img5 from '../assets/Thai.png';
import img6 from '../assets/Tri.png';
import img7 from '../assets/about.png';

export default function Services() {
    const data = [
        {
            icon: img2,
            title: 'Truong Dinh Huy',
            subTitle: 'Team Leader',
        },
        {
            icon: img1,
            title: 'Ngo Dac Quoc Long',
            subTitle: 'Team Member',
        },
        {
            icon: img3,
            title: 'Phan Quang Linh',
            subTitle: 'Team Member',
        },
        {
            icon: img4,
            title: 'Le Cong Phuc',
            subTitle: 'Team Member',
        },
        {
            icon: img5,
            title: 'Hoang Trong Thai',
            subTitle: 'Team Member',
        },
        {
            icon: img6,
            title: 'Phan Huu Minh Tri',
            subTitle: 'Team Member',
        },
    ];
    return (
        <div>
            <div id="about" style={{ textAlign: 'center', marginTop: '2rem' }}>
                <img src={img7} alt="" />
                <h2 style={{ marginTop: '2rem' }}>Meet Our Team</h2>
            </div>
            <Section id="services">
                {data.map((service, index) => {
                    return (
                        <div className="service">
                            <div className="icon">
                                <img src={service.icon} alt="" />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.subTitle}</p>
                        </div>
                    );
                })}
            </Section>
        </div>
    );
}

const Section = styled.section`
    padding: 2rem 10rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    .service {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        background-color: aliceblue;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: 0.3s ease-in-out;
        text-align: center;
        font-size: 15px;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        #about {
            text-align: center;
        }
        .icon {
            img {
                width: 100%;
                height: 250px;
                border-radius: 20px;
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 720px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
