import React from 'react';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
const ContactForm = () => {
  const {t}= useTranslation()
  return (
    <section className="section-contact">
      <div className="container">
        <div className="contact-wrapper row">
          <div className="col-6">
            <div className="contact-left">
              <h3 className="contact-title">{t('contact.contact_info')}</h3>
              <p className="contact-desc">
              {t('contact.introduction')}
              </p>
              <ul className="contact-info">
                <li className="contact-info-item">
                  <HiOutlineLocationMarker />
                  <h4>54 Nguyen Luong Bang, Da Nang</h4>
                </li>
                <li className="contact-info-item">
                  <HiOutlinePhone />
                  <h4>+84 232 111 232</h4>
                </li>
                <li className="contact-info-item">
                  <HiOutlineMail />
                  <h4>bkcircus@gmail.com</h4>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="contact-right">
              <h3 className="contact-title">{t('contact.send_message')}</h3>
              <form className="form-contact">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder={t('contact.your_name')}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder={t('contact.phone_number')}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    placeholder={t('contact.your_email')}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="8"
                    cols="50"
                    placeholder={t('contact.message')}
                    className="form-input"
                  ></textarea>
                </div>
                <button className="btn btn-primary">{t('contact.submit')}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
