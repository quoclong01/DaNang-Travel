import React from "react";
import styled from "styled-components";
import IconFacebook from "../assets/icons/facebook.png";
import IconTwitter from "../assets/icons/twitter.png";
import IconInstagram from "../assets/icons/instagram.png";
import IconYoutube from "../assets/icons/youtube.png";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Column>
          <Heading>{t("common.footer.support")}</Heading>
          <FooterLink href="#">{t("common.footer.help_center")}</FooterLink>
          <FooterLink href="#">{t("common.footer.cv_res")}</FooterLink>
          <FooterLink href="#">{t("common.footer.cancel_option")}</FooterLink>
          <FooterLink href="#">{t("common.footer.safety_info")}</FooterLink>
        </Column>
        <Column>
          <Heading>{t("common.footer.company")}</Heading>
          <FooterLink href="#">{t("common.footer.about_us")}</FooterLink>
          <FooterLink href="#">{t("common.footer.community_blog")}</FooterLink>
          <FooterLink href="#">{t("common.footer.carrer")}</FooterLink>
          <FooterLink href="#">{t("common.footer.privacy_policy")}</FooterLink>
          <FooterLink href="#">
            {t("common.footer.terms_of_service")}
          </FooterLink>
        </Column>
        <Column>
          <Heading>{t("common.footer.contact")}</Heading>
          <FooterLink href="#">{t("common.footer.partnership")}</FooterLink>
          <FooterLink href="#">{t("common.footer.FAQ")}</FooterLink>
          <FooterLink href="#">{t("common.footer.get_in_touch")}</FooterLink>
        </Column>
        <Column>
          <Heading>{t("common.footer.support")}</Heading>
          <FooterSocial>
            <FooterLink href="#">
              <img alt="facebook" src={IconFacebook} width="40px" />
            </FooterLink>
            <FooterLink href="#">
              <img alt="twitter" src={IconTwitter} width="40px" />
            </FooterLink>
            <FooterLink href="#">
              <img alt="insta" src={IconInstagram} width="40px" />
            </FooterLink>
            <FooterLink href="#">
              <img alt="youtube" src={IconYoutube} width="40px" />
            </FooterLink>
          </FooterSocial>
        </Column>
      </Row>
      <CopyrightWrapper>© Copyright BK Circus Team 2022</CopyrightWrapper>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 90px;
  background: #f7f8fa;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  max-width: 1406px;
  width: 100%;
  padding: 0 15px 50px 15px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  border-bottom: 1px solid #d9d9d9;

  @media screen and (min-width: 280px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLink = styled.a`
  color: #727272;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 200ms ease-in;
  }
`;

export const FooterSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  grid-gap: 1rem;
`;

export const Heading = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #232323;
  margin-bottom: 20px;
`;
export const CopyrightWrapper = styled.p`
  text-align: center;
  padding: 30px;
  font-size: 14px;
  color: #727272;
  font-weight: 400;
`;
