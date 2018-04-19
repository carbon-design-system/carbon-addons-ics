import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const TagWrapper = ({ children, light, ...rest }) => {
  const wrapperClasses = classNames({
    'bx--tag__list': true,
    'bx--tag__list--light': light,
  });

  return (
    <ul className={wrapperClasses} {...rest}>
      {children}
    </ul>
  );
};

TagWrapper.propTypes = {
  children: PropTypes.node,
};

export default TagWrapper;
