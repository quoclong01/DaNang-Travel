import { Dropdown } from 'antd';
import { React, useState, useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Image from '../assets/index';
import { useTranslation } from 'react-i18next';
import i18n from '../configs/i18n';

const Header = () => {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState('JP');

  const changeLang = (newLang) => {
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  const lang = ['EN', 'JP', 'VI'];
  // eslint-disable-next-line
  const [isLogin, setIsLogin] = useState(localStorage.getItem('user-info'));
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    {
      label: (
        <p
          onClick={() => {
            navigate('/profile');
          }}
        >
          Profile
        </p>
      ),
      key: 'item-1',
    }, // remember to pass the key prop
    {
      label: (
        <p
          onClick={() => {
            navigate('/new');
          }}
        >
          Create Blog
        </p>
      ),
      key: 'item-2',
    },
    {
      label: (
        <p
          onClick={() => {
            localStorage.removeItem('user-info');
            navigate('/');
          }}
        >
          Logout
        </p>
      ),
      key: 'item-3',
    },
  ];

  useEffect(() => {
    const newLang = localStorage.getItem('language');
    setCurrentLang(newLang);
    i18n.changeLanguage(newLang);
  }, [location]);
  return (
    <header className='header'>
      <style jsx global>{`
        select {
          border: none;
          outline: none;
          scroll-behavior: smooth;
          background: transparent;
          font-weight: bolder;
        }
      `}</style>
      <h1 className='header-logo'>
        <Link to={isLogin ? '/home' : '/'} className='header-logo-image'>
          <img src={Image.Logo} alt='t-hotel' />
        </Link>
      </h1>
      <nav className='nav'>
        <nav className='nav'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/home' className='nav-link'>
                {t('common.header.home')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                {t('common.header.about')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/bloglist' className='nav-link'>
                {t('common.header.blog')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                {t('common.header.contact')}
              </Link>
            </li>
          </ul>
        </nav>
      </nav>
      <div className='header-right'>
        <div className='header-lang'>
          <select
            onChange={(event) => changeLang(event.target.value)}
            value={currentLang}
          >
            {lang.map((i, index) => (
              <option key={index} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className='header-auth'>
          {/* <div className="header-auth-link">
            <Link to="/">
              <BsHandbag />
            </Link>
          </div> */}
          {!isLogin ? (
            <div className='header-auth-link'>
              <Link to='/login'>
                <BiUser />
              </Link>
            </div>
          ) : (
            <div className='header-auth-link' s>
              <Dropdown menu={{ items }}>
                <BiUser />
              </Dropdown>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
