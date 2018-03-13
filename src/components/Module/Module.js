import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['single', 'fluid']),
  padding: PropTypes.bool,
};

const moduleBodyPropTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  className: PropTypes.string,
};

const moduleHeaderPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  size: 'fluid',
  padding: false,
};

const moduleBodydefaultProps = {
  centered: false,
};

const Module = ({ children, className, size, padding, ...rest }) => {
  const wrapperClasses = classNames(className, {
    'bx--module-ics': true,
    'bx--module--fluid': size === 'fluid',
    'bx--module--single': size === 'single',
    'bx--module--padding': padding,
  });

  return (
    <div className={wrapperClasses} {...rest}>
      <div className="bx--module__inner">{children}</div>
    </div>
  );
};

const ModuleBody = ({ children, className, centered, ...rest }) => {
  const wrapperClasses = classNames('bx--module__content', className, {
    'bx--module__content--centered': centered,
  });

  return (
    <div className={wrapperClasses} {...rest}>
      {children}
    </div>
  );
};

const ModuleHeader = ({ children, className, ...rest }) => {
  const wrapperClasses = classNames('bx--module__header', className);

  return (
    <div className={wrapperClasses} {...rest}>
      <div className="bx--module__title">{children}</div>
    </div>
  );
};

Module.propTypes = propTypes;
ModuleBody.propTypes = moduleBodyPropTypes;
Module.defaultProps = defaultProps;
ModuleBody.defaultProps = moduleBodydefaultProps;
ModuleHeader.propTypes = moduleHeaderPropTypes;

export { Module, ModuleBody, ModuleHeader };
