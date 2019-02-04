import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelMotion: !!props.defaultValue || !!props.value || props.defaultValue === 0,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (value !== this.props.value) {
      this.setState({ labelMotion: Boolean(value) });
    }
  }

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
    type: PropTypes.string,
    hideLabel: PropTypes.bool,
    invalid: PropTypes.bool,
    invalidText: PropTypes.string,
  };

  static defaultProps = {
    className: 'bx--text__input',
    disabled: false,
    type: 'text',
    onChange: () => {},
    onClick: () => {},
    onKeyUp: () => {},
    invalid: false,
    labelText: '',
    invalidText: 'Provide invalidText',
  };

  _onChange = evt => {
    if (!this.props.disabled) {
      this.props.onChange(evt);
    }
  };

  _onClick = evt => {
    if (!this.props.disabled) {
      this.props.onClick(evt);
    }
  };

  _onKeyUp = evt => {
    if (!this.props.disabled) {
      this.setState({ labelMotion: Boolean(evt.target.value) });
    }
  };

  render() {
    const { labelText, id, type, hideLabel, invalid, invalidText, ...rest } = this.props;

    const textInputClasses = classNames({
      'bx--text-input': true,
      [this.props.className]: this.props.className,
      'bx--text-input--value': this.state.labelMotion,
    });

    const labelClasses = classNames({
      'bx--label': true,
      'bx--label-motion': this.state.labelMotion,
      'bx--visually-hidden': hideLabel,
    });

    const label = labelText ? (
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>
    ) : null;

    const error = invalid ? <div className="bx--form-requirement">{invalidText}</div> : null;

    const input = invalid ? (
      <input
        {...rest}
        type={type}
        id={id}
        className={textInputClasses}
        onKeyUp={this._onKeyUp.bind(this)}
        onClick={this._onClick.bind(this)}
        onChange={this._onChange.bind(this)}
        data-invalid
        placeholder={null}
      />
    ) : (
      <input
        {...rest}
        id={id}
        type={type}
        className={textInputClasses}
        onKeyUp={this._onKeyUp.bind(this)}
        onClick={this._onClick.bind(this)}
        onChange={this._onChange.bind(this)}
        placeholder={null}
      />
    );

    const span = <span className="bx--mi__underline" />;

    return (
      <div className="bx--text-input__wrapper">
        {input}
        {span}
        {label}
        {error}
      </div>
    );
  }
}
