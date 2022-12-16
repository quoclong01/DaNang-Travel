import React from 'react';

const AboutMember = ({ member }) => {
  const { image, name, position } = member;

  return (
    <li className="col-3">
      <div className="member">
        <div className="member-image">
          <img src={image} alt={name} />
        </div>
        <div className="member-info">
          <h3 className="member-name">{name}</h3>
          <span className="member-position">{position}</span>
        </div>
      </div>
    </li>
  );
};

export default AboutMember;
