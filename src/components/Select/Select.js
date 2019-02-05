import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

const Select = ({
  className,
  id,
  inline,
  labelText,
  disabled,
  children,
  iconDescription,
  hideLabel,
  ...rest
}) => {
  const selectClasses = classNames({
    'bx--select': true,
    'bx--select--inline': inline,
    [className]: className,
  });
  const labelClasses = classNames('bx--label', {
    'bx--visually-hidden': hideLabel,
  });
  return (
    <div className="bx--form-item">
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>

      <div className={selectClasses}>
        <select
          {...rest}
          id={id}
          className="bx--select-input"
          disabled={disabled}>
          {children}
        </select>
        <Icon
          name="down"
          className="bx--select__arrow"
          description={iconDescription}
        />
        <span className="bx--mi__underline" />
      </div>
    </div>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  iconDescription: PropTypes.string,
  hideLabel: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  labelText: 'Select',
  inline: false,
  iconDescription: 'open list of options',
};

export default Select;
