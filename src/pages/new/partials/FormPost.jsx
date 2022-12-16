import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { api } from '../../../API/api';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const FormPost = () => {
  const { register, handleSubmit } = useForm();
  const [isRequestAPI, setIsRequestAPI] = useState(false);
  const [category, setCategory] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onSubmit = (data) => {
    if (!isRequestAPI) {
      const URL = api + 'api/blog/upload';
      setIsRequestAPI(true);
      axios
        .post(
          `${URL}?name=${data.name}&description=${data.description}&image=${data.image[0].name}&address=${data.address}&user_id=${userInfo.id}&category_id=${data.category}`
        )
        .then((res) => {
          navigate(`/blog/${res.data.id}`);
          setIsRequestAPI(false);
        })
        .catch((err) => {
          setIsRequestAPI(false);
        });
    }
  };

  const getListCategory = () => {
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

  useEffect(() => {
    getListCategory();
    setUserInfo(JSON.parse(localStorage.getItem('user-info')));
    // eslint-disable-next-line
  }, []);

  return (
    <section className='section-new'>
      <div className='container'>
        <div className='new-wrapper'>
          <h2 className='txt-title txt-center mb-5'>Create Blog</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='form-post'>
            <div className='form-post-group'>
              <label htmlFor='name'>{t('blog.name')}</label>
              <input
                id='name'
                {...register('name')}
                placeholder={t('blog.write_name')}
              />
            </div>
            <div className='form-post-group'>
              <label htmlFor='address'>{t('blog.address')}</label>
              <input
                {...register('address')}
                id='address'
                placeholder={t('blog.write_address')}
              />
            </div>
            <div className='form-post-group'>
              <label htmlFor='description'>{t('blog.description')}</label>
              <textarea
                type='text'
                placeholder={t('blog.write_desc')}
                rows={10}
                id='description'
                {...register('description', {
                  required: true,
                  maxLength: 1000,
                })}
              />
            </div>
            <div className='form-post-group'>
              <label htmlFor='image'>{t('blog.upload_image')}</label>
              <input id='image' type='file' {...register('image')} />
            </div>
            <div className='form-post-group'>
              <label htmlFor='category'>{t('blog.category')}</label>
              <select {...register('category')}>
                {category?.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <button className='btn btn-primary form-post-btn'>{t('blog.submit')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormPost;
