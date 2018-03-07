import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const UnorderedList = ({ children, className, nested, small }) => {
  const classNames = classnames('bx--list--unordered', className, {
    'bx--list--nested': nested,
    'bx--list--small': small,
  });
  return <ul className={classNames}>{children}</ul>;
};

UnorderedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  nested: PropTypes.bool,
  small: PropTypes.bool,
};

UnorderedList.defaultProps = {
  nested: false,
  small: false,
};

export default UnorderedList;
