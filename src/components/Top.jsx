import React, { useEffect, useState } from "react";
import axios from "axios";
import { api, api_image } from "../API/api";
import Slider from "react-slick";
import imgDN from "../assets/danang.jpg";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function Top() {
  const [category, setCategory] = useState();
  const { t } = useTranslation();
  const [isRequestAPI, setIsRequestAPI] = useState(false);
  const [categoryId, setCategoryId] = useState(1);
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getListCategory();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const URL = api + `api/blogByCate?category_id=${categoryId}`;
    axios.get(URL).then((res) => {
      console.log(res.data);
      setBlog(res.data);
    });
  }, [categoryId]);

  const renderRating = (rating) => {
    if (!rating) {
      return (
        <ul className='rating-list'>
          {[...Array(5).keys()].map((item) => (
            <li className='rating-item'>
              <StarFilled style={{ fontSize: '14px', color: '#eaeef3' }}/>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul className="rating-list">
        {[...Array(rating).keys()].map((item) => (
          <li className='rating-item'>
            <StarFilled style={{ fontSize: '14px', color: '#DA6938' }} />
          </li>
        ))}
      </ul>
    );
  };
  const settings = {
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const getListCategory = async () => {
    if (!isRequestAPI) {
      const URL = api + 'api/category';
      setIsRequestAPI(true);
      axios
        .get(URL)
        .then((res) => {
          setCategory(res.data);
          setIsRequestAPI(false);
        })
        .catch((err) => {
          setIsRequestAPI(false);
        });
    }
  };

  return (
    <section>
      <section className="section-top">
        <div className="container">
          <h2 className="txt-title txt-center mb-5">{t('home.categories')}</h2>
          <div className="destination-list">
            <Slider {...settings}>
              {category?.map((item) => {
                return (
                  <div
                    className="destination-item"
                    onClick={() => {
                      console.log(item.id);
                      setCategoryId(item.id);
                    }}
                  >
                    <div className="destination-image">
                      <img
                        src={
                          item.image !== null ?? item.image !== ''
                            ? item.image.includes('http')
                              ? item.image
                              : api_image + item.image
                            : imgDN
                        }
                        alt=""
                      />
                    </div>
                    <h3 className="destination-title">{item.name}</h3>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      <section className='section-plan'>
        <div className='container'>
          <h2 className='txt-title txt-center mb-5'>{t('home.top_destination')}</h2>
          <div className='plan-wrapper'>
            <ul className='plan-list row'>
              {blog?.data?.map((item) => {
                return (
                  <li
                    className='plan-item col-3'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      navigate(`/blog/${item.id}`);
                    }}
                  >
                    <div className="card">
                      <div className="card-image">
                        <a>
                          <img
                            src={
                              item.image !== '' ?? item.image !== null
                                ? item.image.includes('http')
                                  ? item.image
                                  : api_image + item.image
                                : imgDN
                            }
                            alt={item.name}
                          />
                        </a>
                      </div>
                      <div className="card-content">
                        {renderRating(item.rating)}
                        <h4 className='card-name'>
                          {item.name}
                        </h4>
                        <p className='card-address'>{item.address}</p>
                        <p className='card-desc'>{item.description}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
