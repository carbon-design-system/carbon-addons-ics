import PropTypes from 'prop-types';
import React from 'react';

const TagWrapper = ({ children, ...rest }) => {
  return (
    <ul className="bx--tag--list" {...rest}>
      {children}
    </ul>
  );
};

TagWrapper.propTypes = {
  children: PropTypes.node,
};

export default TagWrapper;
