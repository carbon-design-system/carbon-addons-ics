import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelMotion:
        !!props.defaultValue || !!props.value || props.defaultValue === 0,
    };
    this.inputRef = null;
    this.onClear = this.onClear.bind(this);
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
    clearable: PropTypes.bool,
    clearDescription: PropTypes.string,
    onClear: PropTypes.func,
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
    clearable: false,
    clearDescription: 'Provide clearDescription',
    onClear: () => {},
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

  onClear() {
    const { disabled, onClear } = this.props;
    if (!disabled) {
      this.inputRef.value = '';
      this.setState({ labelMotion: false });
      onClear();
    }
  }

  render() {
    const {
      labelText,
      id,
      type,
      hideLabel,
      invalid,
      invalidText,
      clearable,
      clearDescription,
      ...rest
    } = this.props;
    const { labelMotion } = this.state;

    const textInputClasses = classNames({
      'bx--text-input': true,
      [this.props.className]: this.props.className,
      'bx--text-input--value': labelMotion,
      'bx--text-input--clearable': clearable,
    });

    const labelClasses = classNames({
      'bx--label': true,
      'bx--label-motion': labelMotion,
      'bx--visually-hidden': hideLabel,
    });

    const label = labelText ? (
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>
    ) : null;

    const error = invalid ? (
      <div className="bx--form-requirement">{invalidText}</div>
    ) : null;

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
        ref={el => (this.inputRef = el)}
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
        ref={el => (this.inputRef = el)}
      />
    );

    const span = <span className="bx--mi__underline" />;

    const clear = clearable ? (
      <Icon
        name="close"
        className="bx--text-input__clear"
        description={clearDescription}
        onClick={this.onClear}
        style={{ opacity: labelMotion ? 1 : 0 }}
      />
    ) : null;

    return (
      <div className="bx--text-input__wrapper">
        {input}
        {clear}
        {span}
        {label}
        {error}
      </div>
    );
  }
}
