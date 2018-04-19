import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';

const ActionIcon = ({
  className,
  disabled,
  small,
  href,
  tabIndex,
  type,
  selected,
  icon,
  iconDescription,
  rounded,
  ...rest
}) => {
  const containerClasses = classNames(className, {
    'bx--action-icon': true,
    'bx--action-icon--selected': selected,
    'bx--action-icon--sm': small,
    'bx--action-icon--rounded': rounded,
  });

  const commonProps = {
    tabIndex,
    className: 'bx--action-icon_btn',
  };

  const buttonIcon = (
    <Icon
      name={icon}
      description={iconDescription}
      height={small ? '16' : '24'}
      width={small ? '16' : '24'}
      className="bx--action-icon_img"
    />
  );

  const button = (
    <button {...rest} {...commonProps} disabled={disabled} type={type}>
      {buttonIcon}
    </button>
  );

  const anchor = (
    <a {...rest} {...commonProps} href={href} role="button">
      {buttonIcon}
    </a>
  );

  return (
    <div className={containerClasses} tabIndex={-1}>
      {href ? anchor : button}
    </div>
  );
};

ActionIcon.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  selected: PropTypes.bool,
  href: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  role: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconDescription: props => {
    if (props.icon && !props.iconDescription) {
      return new Error(
        'icon property specified without also providing an iconDescription property.',
      );
    }
    return undefined;
  },
};

ActionIcon.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  selected: false,
};

export default ActionIcon;
