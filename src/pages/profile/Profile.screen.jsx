/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Row, Col, Image, Typography, Skeleton } from 'antd';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DefaultImg from '../../assets/profile/defaultImg.png';
import { WrapperProfile } from './styled';
import { useTranslation } from 'react-i18next';
import { api_image } from '../../API/api';
export default function Profile({ children }) {
  const { Title, Text } = Typography;
  const { t } = useTranslation();
  return (
    <WrapperProfile>
      <Header/>
      <Row>
        <Col span={22} offset={1}>
          <Row>
            <Col md={4} sm={0} xs={0}>
              <Row justify='center' align='middle'>
                <Skeleton avatar paragraph={{ rows: 2 }} loading={false} active>
                  <Col span={24}>
                    <Image
                      // src={currentUser?.avatar ? currentUser.avatar : DefaultImg}
                      src = {
                        JSON.parse(localStorage.getItem('user-info')).image == null
                        ?
                        api_image + JSON.parse(localStorage.getItem('user-info'))?.avatar
                        :
                        DefaultImg
                      }
                      preview={false}
                      alt='Avatar'
                      className='avatar'
                    />
                  </Col>
                  <Col span={24}>
                    <Title level={5}>{t('profile.account_for')}:</Title>
                    <Text>{JSON.parse(localStorage.getItem('user-info'))?.name}</Text>
                  </Col>
                </Skeleton>
              </Row>
            </Col>

            <Col md={20} sm={24} xs={24}>
              <Row>
                <Title level={4}>{t('profile.account_information')}</Title>
              </Row>
              {children}
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer/>
    </WrapperProfile>
  );
}
