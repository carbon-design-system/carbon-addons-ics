import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Textarea = ({
  className,
  id,
  labelText,
  onChange,
  onClick,
  invalid,
  invalidText,
  ...rest
}) => {
  const textareaProps = {
    id,
    onChange: evt => {
      if (!rest.disabled) {
        onChange(evt);
      }
    },
    onClick: evt => {
      if (!rest.disabled) {
        onClick(evt);
      }
    },
  };

  const textareaClasses = classNames('bx--text-area', className);
  const label = labelText ? (
    <label htmlFor={id} className="bx--label">
      {labelText}
    </label>
  ) : null;

  const error = invalid ? (
    <div className="bx--form-requirement">{invalidText}</div>
  ) : null;

  const input = invalid ? (
    <textarea
      {...rest}
      {...textareaProps}
      className={textareaClasses}
      data-invalid
    />
  ) : (
    <textarea {...rest} {...textareaProps} className={textareaClasses} />
  );

  const span = <span className="bx--mi__underline" />;

  return (
    <div className="bx--form-item bx--text-area__container">
      {label}
      {input}
      {span}
      {error}
    </div>
  );
};

Textarea.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  invalid: PropTypes.bool,
  invalidText: PropTypes.string,
};

Textarea.defaultProps = {
  disabled: false,
  onChange: () => {},
  onClick: () => {},
  placeholder: 'Hint text here',
  rows: 4,
  cols: 50,
  invalid: false,
  labelText: 'Provide labelText',
  invalidText: 'Provide invalidText',
};

export default Textarea;
