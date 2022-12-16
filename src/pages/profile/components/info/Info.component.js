import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';

import FormProfile from './formProfile/FormProfile.component';
import InfoAuth from './infoAuth/InfoAuth.component';
import { WrapperInfo } from './styled';
import { useTranslation } from 'react-i18next';
export default function Info() {
  const { Title } = Typography;
  const {t} = useTranslation()

  return (
    <WrapperInfo>
      <Row className='form-profile'>
        <Col md={15} sm={24} xs={24}>
          <Row>
            <Col span={24}>
              <Title level={5}>{t('profile.personal_information')}</Title>
            </Col>
          </Row>
          <FormProfile />
        </Col>
        <Col md={1} sm={0} xs={0}>
          <Divider type='vertical' className='divider' />
        </Col>
        <Col md={8} sm={24} xs={24}>
          <InfoAuth />
        </Col>
      </Row>
    </WrapperInfo>
  );
}
