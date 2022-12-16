import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { api, api_image } from '../API/api';
import img1 from '../assets/profile/defaultImg.png';
import imgDN from '../assets/danang.jpg';

import { useTranslation } from 'react-i18next';

export default function BlogList() {
  const { t } = useTranslation();
  const [category, setCategory] = useState();
  const [categoryId, setCategoryId] = useState(1);
  const [blog, setBlog] = useState([]);
  const [search, setSearch] = useState('');
  const [populars, setPopulars] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const URL = api + 'api/category';
    axios.get(URL).then((res) => {
      setCategory(res.data);
    });
  }, []);

  useEffect(() => {
    const URL = api + 'api/blog';
    axios.get(URL).then((res) => {
      setPopulars(res.data);
    });
  }, []);

  useEffect(() => {
    const URL = api + `api/blogByCateFull?category_id=${categoryId}`;
    axios.get(URL).then((res) => {
      setBlog(res.data);
      console.log(res.data);
    });
  }, [categoryId]);

  return (
    <Section className='section-bloglist'>
      <ul class='breadcrumb'>
        <li>
          <a href='/home'>{t('blog.home')}</a>
        </li>
        <li>{t('blog.blog')}</li>
      </ul>
      <div className='container'>
        <div className='blog-wrapper'>
          <div className='posts'>
            {blog
              ?.filter((val) => {
                if (search === '') {
                  return val;
                } else {
                  return val.name
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase());
                }
              })
              ?.map((post) => {
                return (
                  <div
                    className='post'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      navigate(`/blog/${post.id}`);
                    }}
                  >
                    <div className='post-image'>
                      <img
                        src={
                          post?.image !== null ?? post?.image !== ''
                            ? post?.image?.includes('http')
                              ? post?.image
                              : api_image + post?.image
                            : imgDN
                        }
                        alt=''
                      />
                    </div>
                    <div className='post-content'>
                      <div className='post-category'>
                        <p>{post?.category?.name}</p>
                      </div>
                      <h3 className='post-name'>{post?.name}</h3>
                      <p className='post-desc'>{post?.description}</p>
                      <div className='post-info'>
                        <div className='post-info-image'>
                          <img
                            src={
                              post.user?.avatar !== null ??
                              post.user?.avatar !== ''
                                ? post.user?.avatar?.includes('http')
                                  ? post.user?.avatar
                                  : api_image + post.user?.avatar
                                : img1
                            }
                            alt={post?.author}
                          />
                        </div>
                        <h4 className='post-info-author'>
                          <span>BY</span>
                          {post?.user?.name}
                        </h4>
                        <p className='post-info-date'>
                          {new Date(post?.updated_at).toLocaleDateString([], {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className='sidebar'>
            <div className='sidebar-wrapper'>
              <div className='sidebar-card'>
                <h3 className='sidebar-card-title'>{t('blog.search')}</h3>
                <form>
                  <input
                    type='text'
                    placeholder={t('blog.search')}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    name='search'
                  />
                  <button type='submit'>
                    <i class='fa fa-search'></i>
                  </button>
                </form>
              </div>
              <div className='sidebar-card'>
                <h3 className='sidebar-card-title'>{t('blog.categories')}</h3>
                <ul className='sidebar-category-list'>
                  {category?.map((item) => {
                    return (
                      <li
                        style={{ cursor: 'pointer' }}
                        className='sidebar-category-item'
                        onClick={() => {
                          setCategoryId(item.id);
                        }}
                      >
                        <h4 className='sidebar-category-name'>{item.name}</h4>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='sidebar-card'>
                <h3 className='sidebar-card-title'>{t('blog.popular_post')}</h3>
                <ul className='sidebar-post-list'>
                  {populars?.map((post) => {
                    return (
                      <li className='sidebar-post-item'>
                        <a
                          href={`/blog/${post.id}`}
                          className='sidebar-post-link'
                        >
                          <div class='sidebar-post-image'>
                            <img src={post.image} alt={post.name} />
                          </div>
                          <div class='sidebar-post-content'>
                            <h4 className='sidebar-post-name'>{post.name}</h4>
                            <p className='sidebar-post-date'>
                              {new Date(post.updated_at).toLocaleDateString(
                                [],
                                {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                }
                              )}
                            </p>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .breadcrumb {
    padding: 10px 30px;
    border-bottom: 1px solid #dedede;
    li {
      display: inline;
      font-size: 18px;
      a {
        color: #0275d8;
        text-decoration: none;
      }
      a:hover {
        color: #01447e;
        text-decoration: underline;
      }
    }
    li + li:before {
      padding: 8px;
      color: black;
      content: '/\\00a0';
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .info {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
