import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Destination1 from '../assets/Destination1.png';
import img1 from '../assets/profile/defaultImg.png';
import img2 from '../assets/profile/defaultImg.png';
import { useParams } from 'react-router';
import axios from 'axios';
import { api, api_image } from '../API/api';
import { useTranslation } from 'react-i18next';

export default function BlogDetail() {
  const { t } = useTranslation();
  const params = useParams();
  const [blogdata, setBlogdata] = useState([]);
  const [comments, setComments] = useState([]);
  const [clickCmt, setClickCmt] = useState(0);
  const [clickRate, setClickRate] = useState(0);
  const [commentbody, setCommentbody] = useState();
  const [populars, setPopulars] = useState([]);
  const [category, setCategory] = useState();
  useEffect(() => {
    const URL2 = api + `api/blog/comments/${params.id}`;
    axios.get(URL2).then((res) => {
      console.log(res.data);
      setComments(res.data);
    });
    // eslint-disable-next-line 
  }, [clickCmt]);
  useEffect(() => {
    const URL = api + 'api/category';
    axios.get(URL).then((res) => {
      setCategory(res.data);
    });
    // eslint-disable-next-line 
  }, []);
  useEffect(() => {
    const URL = api + `api/blog/${params.id}`;
    axios.get(URL).then((res) => {
      console.log(res.data);
      setBlogdata(res.data);
    });
    // eslint-disable-next-line 
  }, [clickRate]);

  useEffect(() => {
    const URL = api + 'api/blog';
    axios.get(URL).then((res) => {
      console.log(res.data);
      setPopulars(res.data);
    });
  }, []);

  return (
    <Section className='section-blogdetail'>
      <ul className='breadcrumb'>
        <li>
          <a href='/home'>{t('blog.home')}</a>
        </li>
        <li>{blogdata?.name}</li>
      </ul>
      <div className='container'>
        <div className='blog-wrapper'>
          <div className='posts'>
            <div className='post'>
              <div className='post-image'>
                <img
                  src={
                    blogdata?.image !== '' ?? blogdata?.image !== null
                      ? blogdata?.image?.includes('http')
                        ? blogdata?.image
                        : api_image + blogdata?.image
                      : Destination1
                  }
                  alt=''
                />
              </div>
              <div className='post-category'>
                <p>{blogdata?.category?.name}</p>
              </div>
              <div className='star-rating'>
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type='button'
                      key={index}
                      className={index <= blogdata?.rating ? 'on' : 'off'}
                      onClick={() => {
                        let URL_R = api + `api/blog/rating/${blogdata?.id}`;
                        axios
                          .get(URL_R, {
                            params: {
                              user_id: JSON.parse(
                                localStorage.getItem('user-info')
                              )['id'],
                              rating: index,
                            },
                          })
                          .then((res) => {
                            setClickRate(clickRate + 1);
                          });
                      }}
                    >
                      <span className='star'>&#9733;</span>
                    </button>
                  );
                })}
              </div>
              <h2 className='post-name'>{blogdata?.name}</h2>
              <p className='post-address'>{blogdata?.address}</p>
              <div className='post-info'>
                <div className='post-info-image'>
                  <img
                    src={
                      blogdata?.user?.avatar == null
                        ? img1
                        : api_image + blogdata?.user?.avatar
                    }
                    alt={blogdata?.user?.name}
                  />
                </div>
                <h4 className='post-info-author'>
                  <span>BY</span>
                  {blogdata?.user?.name}
                </h4>
                <p className='post-info-date'>
                  {new Date(blogdata?.updated_at).toLocaleDateString([], {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <p className='post-desc'>{blogdata?.description}</p>
            </div>
            <div className='comments-wrapper section-inner'>
              <div className='comments' id='comments'>
                <div className='comments-header section-inner small max-percentage'>
                  <h2 className='comment-reply-title'>
                    {comments?.length} {t('blog.comment')}
                  </h2>
                </div>
                {comments?.map((item) => (
                  <div className='comments-inner section-inner thin max-percentage'>
                    <div
                      id='comment-1'
                      className='comment even thread-even depth-1'
                    >
                      <article id='div-comment-1' className='comment-body'>
                        <div className='comment-meta'>
                          <div className='comment-author vcard'>
                            <a href='/' rel='external nofollow' className='url'>
                              <img
                                src={
                                  item?.user?.avatar == null
                                    ? img2
                                    : api_image + item?.user?.avatar
                                }
                                alt=''
                              />
                              <div className='comment-author-info'>
                                <h4 className='fn'>{item?.user?.name}</h4>
                                <p className='comment-metadata'>
                                  {new Date(
                                    item?.updated_at
                                  ).toLocaleDateString([], {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  })}
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className='comment-content entry-content'>
                          <span className='screen-reader-text says'>
                            {t('blog.say')}:
                          </span>
                          <p>{item?.body}</p>
                        </div>
                        <div className='comment-footer-meta'>
                          <span className='comment-reply'>
                            <a
                              rel='nofollow'
                              class='btn btn-primary comment-reply-link'
                              href='/'
                              data-commentid='1'
                              data-postid='1'
                              data-belowelement='div-comment-1'
                              data-respondelement='respond'
                              aria-label='Reply to A WordPress Commenter'
                            >
                              {t('blog.reply')}
                            </a>
                          </span>
                        </div>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
              <div id='respond' className='comment-respond'>
                <h2 id='reply-title' className='comment-reply-title'>
                  {t('blog.leave_comment')}
                </h2>
                <form
                  action=''
                  method='post'
                  id='commentform'
                  className='section-inner thin max-percentage'
                  novalidate
                >
                  <div className='comment-form'>
                    <label for='comment'>{t('blog.comment')}</label>
                    <textarea
                      id='comment'
                      name='comment'
                      cols='45'
                      rows='8'
                      maxlength='65525'
                      required='required'
                      value={commentbody}
                      onChange={(e) => {
                        setCommentbody(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className='form-submit'>
                    <input
                      name='submit'
                      style={{ cursor: 'pointer' }}
                      type='button'
                      id='submit'
                      className='submit'
                      value={t('blog.comment')}
                      onClick={() => {
                        const URL3 = api + `api/comment/add/${params.id}`;
                        if (commentbody !== '' || commentbody !== null) {
                          axios
                            .post(URL3, {
                              user_id: JSON.parse(
                                localStorage.getItem('user-info')
                              )['id'],
                              body: commentbody,
                            })
                            .then((res) => {
                              setClickCmt(clickCmt + 1);
                              setCommentbody('');
                            });
                        }
                      }}
                    />
                    <input
                      type='hidden'
                      name='comment_post_ID'
                      value='1'
                      id='comment_post_ID'
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='sidebar'>
            <div className='sidebar-wrapper'>
              <div className='sidebar-card'>
                <h3 className='sidebar-card-title'>{t('blog.search')}</h3>
                <form>
                  <input
                    type='text'
                    placeholder={t('blog.search')}
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
