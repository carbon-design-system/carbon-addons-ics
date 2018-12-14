import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import Icon from '../Icon';
import classNames from 'classnames';

export default class NumberInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    iconDescription: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    value: PropTypes.number,
    step: PropTypes.number,
    invalid: PropTypes.bool,
    invalidText: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    iconDescription: 'choose a number',
    label: ' ',
    onChange: () => {},
    onClick: () => {},
    value: 0,
    step: 1,
    invalid: false,
    invalidText: 'Provide invalidText',
  };

  _inputRef = createRef();

  constructor(props) {
    super(props);

    let value = props.value;
    if (props.min || props.min === 0) {
      value = Math.max(props.min, value);
    }

    this.state = {
      value,
      labelMotion:
        !!props.defaultValue || !!props.value || props.defaultValue != null || props.value != null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value,
        labelMotion: Boolean(nextProps.value),
      });
    }
  }

  handleChange = evt => {
    if (!this.props.disabled) {
      // access the event properties in an asynchronous way
      evt.persist();
      evt.imaginaryTarget = this._inputRef.current;
      this.setState(
        {
          value: evt.target.value,
          labelMotion:
            evt.target.value === 0 ? Boolean(evt.target.value + 1) : Boolean(evt.target.value),
        },
        () => {
          this.props.onChange(evt);
        },
      );
    }
  };

  handleArrowClick = (evt, direction) => {
    let value = typeof this.state.value === 'string' ? Number(this.state.value) : this.state.value;
    const { disabled, min, max, step } = this.props;
    const conditional =
      direction === 'down'
        ? (min !== undefined && value > min) || min === undefined
        : (max !== undefined && value < max) || max === undefined;

    if (!disabled && conditional) {
      value = direction === 'down' ? value - step : value + step;
      evt.persist();
      evt.imaginaryTarget = this._inputRef.current;
      this.setState(
        {
          value,
          labelMotion: value === 0 ? Boolean(value + 1) : Boolean(value),
        },
        () => {
          this.props.onClick(evt, direction);
          this.props.onChange(evt, direction);
        },
      );
    }
  };

  render() {
    const {
      className,
      disabled,
      iconDescription, // eslint-disable-line
      id,
      label,
      max,
      min,
      step,
      invalid,
      invalidText,
      _inputRef,
      ...rest
    } = this.props;

    const numberInputClasses = classNames({
      'bx--number-input__wrapper': true,
      [className]: className,
    });

    const labelClasses = classNames({
      'bx--label': true,
      'bx--label-motion': this.state.labelMotion,
    });

    const props = {
      disabled,
      id,
      max,
      min,
      step,
      onChange: this.handleChange,
      value: this.props.value == null ? null : this.state.value,
    };

    const buttonProps = {
      disabled,
      type: 'button',
      className: 'bx--number__control-btn',
    };

    const inputWrapperProps = {};
    let error = null;
    if (invalid) {
      inputWrapperProps['data-invalid'] = true;
      error = <div className="bx--form-requirement">{invalidText}</div>;
    }

    const span = <span className="bx--mi__underline" />;
    const labelText = label ? (
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    ) : null;

    const buttonControls = (
      <div className="bx--number__controls">
        <button {...buttonProps} onClick={evt => this.handleArrowClick(evt, 'up')}>
          <Icon className="up-icon" name="up" description={this.props.iconDescription} />
        </button>
        <button {...buttonProps} onClick={evt => this.handleArrowClick(evt, 'down')}>
          <Icon className="down-icon" name="down" description={this.props.iconDescription} />
        </button>
      </div>
    );

    return (
      <div className={numberInputClasses} {...inputWrapperProps}>
        <input
          type="number"
          pattern="[0-9]*"
          className="bx--number"
          {...rest}
          {...props}
          ref={_inputRef}
        />
        {buttonControls}
        {labelText}
        {span}
        {error}
      </div>
    );
  }
}
