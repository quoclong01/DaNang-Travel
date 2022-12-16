import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Row, Col, Radio, Form, Typography, Button } from "antd";

// import { PrimaryButton } from "../../../../../components/button";
import FormInput from "../../../../../components/input";
// import { upload } from '../../../../../config/firebase/firebase';
// import { ProfileSchema } from "../../../schema/Schema";
// import DefaultImg from "../../../../../assets/profile/defaultImg.png";
import { WrapperForm, ValidationError } from "./styled";
import axios from "axios";
import { api } from "../../../../../API/api";
// import { useTranslation } from "react-i18next";
import { t } from "i18next";

export default function FormProfile() {
  const { Text } = Typography;

  // const inputRef = useRef(null);
  // eslint-disable-next-line
  const [isUpload, setIsUpload] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(ProfileSchema),
  });

  // const updateInfoSuccess = () => {
  //   toastOn('success', t('change_info_success'));
  // };

  // const updateInfoFail = () => {
  //   toastOn('error', t('change_info_fail'));
  // };

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(
        api +
          "api/editprofile/" +
          JSON.parse(localStorage.getItem("user-info"))?.id,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user-info", JSON.stringify(res.data));
      });
    // delete data.email;
    // updateUser({ data, callbackSuccess: updateInfoSuccess, callbackFail: updateInfoFail });
  };
  // eslint-disable-next-line
  const handleChange = async (e) => {
    setIsUpload(true);
    // await upload(e.target.files[0])
    //   .then((res) => {
    //     const data = { avatar: res };
    //     // updateUser({ data, callbackSuccess: updateInfoSuccess, callbackFail: updateInfoFail });
    //   })
    //   .catch()
    //   .finally(() => setIsUpload(false));
    setIsUpload(false);
  };
  return (
    <WrapperForm>
      {/* {currentUser ? (
        <Spin spinning={isLoading || isUpload} delay={500}> */}
      <Form className="form" onFinish={handleSubmit(onSubmit)}>
        <FormInput
          label={t("profile.name")}
          name="name"
          defaultValue={JSON.parse(localStorage.getItem("user-info"))?.name}
          control={control}
          errors={errors?.username?.message}
          Icon={UserOutlined}
        />
        <FormInput
          label={t("profile.email")}
          name="email"
          defaultValue={JSON.parse(localStorage.getItem("user-info"))?.email}
          control={control}
          errors={errors?.email?.message}
          Icon={MailOutlined}
          disabled={true}
        />
        <FormInput
          label={t("profile.phone_number")}
          name="phone"
          defaultValue={JSON.parse(localStorage.getItem("user-info"))?.phone}
          control={control}
          errors={errors?.phoneNumber?.message}
          Icon={PhoneOutlined}
        />


        <Row justify="center" align="middle">
          <Col xl={6} sm={24} xs={24}>
            <Text className="form__label">
              <HeartOutlined className="icon" /> {t("profile.gender")}:
            </Text>
          </Col>

          <Col xl={18} sm={24} xs={24}>
            <Controller
              name="gender"
              // defaultValue={currentUser?.gender.toString()}
              defaultValue={
                JSON.parse(localStorage.getItem("user-info"))?.gender
              }
              control={control}
              render={({ field }) => (
                <Radio.Group className="radio-gender" {...field}>
                  <Radio value={1}> {t("profile.male")}</Radio>
                  <Radio value={2}>{t("profile.female")}</Radio>
                </Radio.Group>
              )}
            />
          </Col>
        </Row>

        <Row>
          <Col xl={{ span: 20, offset: 4 }} sm={24} xs={24}>
            <ValidationError>
              {errors.gender && errors.gender?.message}
            </ValidationError>
          </Col>
        </Row>

        <Row>
          <Col span={24} className="button-save">
            <Button type="primary" htmlType="submit">
              {t("profile.save_change")}
            </Button>
          </Col>
        </Row>
      </Form>
      {/* </Spin>
      ) : null} */}
    </WrapperForm>
  );
}
