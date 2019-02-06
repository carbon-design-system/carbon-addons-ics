import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const CardContent = ({
  className,
  children,
  cardTitle,
  cardLink,
  cardInfo,
  cardAvatar,
  ...other
}) => {
  const cardContentClasses = classNames({
    'bx--card__card-overview': true,
    'bx--card__business-card': true,
    [className]: className,
  });

  const cardLinkContent = cardLink
    ? cardLink.map((link, key) => (
        <a key={key} href={link} className="bx--about__title--link">
          {link}
        </a>
      ))
    : '';

  const cardInfoContent = cardInfo
    ? cardInfo.map((info, key) => (
        <p key={key} className="bx--card__info">
          {info}
        </p>
      ))
    : '';

  const cardLinkContentArray = Object.keys(cardLinkContent);
  const cardInfoContentArray = Object.keys(cardInfoContent);

  return (
    <div {...other} className={cardContentClasses}>
      {children}
      <div className="bx--card__business-card">
        {cardAvatar && (
          <div className="bx--about__icon">
            <img
              src={cardAvatar}
              alt="Avatar"
              className="bx--about__icon--img"
            />
          </div>
        )}
        <div className="bx--card__business-card__title">
          <p id="card-app-title" className="bx--about__title--name">
            {cardTitle}
          </p>
          {cardLinkContentArray.map((info, key) => cardLinkContent[key])}
          {cardInfoContentArray.map((info, key) => cardInfoContent[key])}
        </div>
      </div>
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node,
  cardTitle: PropTypes.string,
  cardLink: PropTypes.node,
  cardInfo: PropTypes.array,
  cardAvatar: PropTypes.string,
  className: PropTypes.string,
};

CardContent.defaultProps = {
  cardTitle: 'card title',
};

export default CardContent;
