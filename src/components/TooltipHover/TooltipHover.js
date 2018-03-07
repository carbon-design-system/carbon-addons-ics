import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import classNames from 'classnames';

const TooltipHover = ({
  children,
  className,
  position,
  text,
  showIcon,
  iconName,
  iconDescription,
  ...rest
}) => {
  const tooltipClasses = classNames(`bx--tooltip--simple__${position}`);

  const tooltipWrapperClasses = classNames(`bx--tooltip--simple`, className);
  return (
    <div className={tooltipWrapperClasses}>
      {children}
      <div className={tooltipClasses} data-tooltip-text={text} {...rest}>
        {showIcon && (
          <Icon
            role="button"
            tabIndex="0"
            name={iconName}
            description={iconDescription}
            className="bx--tooltip__icon"
          />
        )}
      </div>
    </div>
  );
};

TooltipHover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['bottom', 'top']),
  text: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  iconName: PropTypes.string,
  iconDescription: PropTypes.string,
};

TooltipHover.defaultProps = {
  position: 'bottom',
  showIcon: true,
  iconName: 'info',
  iconDescription: 'tooltip',
  text: 'Provide text',
};

export default TooltipHover;
