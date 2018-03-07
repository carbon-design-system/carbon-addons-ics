import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const OrderedList = ({ children, className, nested, small }) => {
  const classNames = classnames('bx--list--ordered', className, {
    'bx--list--nested': nested,
    'bx--list--small': small,
  });
  return <ol className={classNames}>{children}</ol>;
};

OrderedList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  nested: PropTypes.bool,
  small: PropTypes.bool,
};

OrderedList.defaultProps = {
  nested: false,
  small: false,
};

export default OrderedList;
