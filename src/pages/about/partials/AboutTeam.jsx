import React from 'react';
import { TEAMS } from '../../../shared/constant/constant';
import AboutMember from './AboutMember';
import { useTranslation } from 'react-i18next';
const AboutTeam = () => {
  const {t} = useTranslation()
  return (
    <section className="section section-team">
      <div className="container">
        <h2 className="about-title">{t('about.meet_our_team')}</h2>
        <ul className="about-list row">
          {TEAMS.map((member, idx) => (
            <AboutMember member={member} key={idx}/>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutTeam;
