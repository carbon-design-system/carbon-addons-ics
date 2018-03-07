import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export default class Search extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    placeHolderText: PropTypes.string,
    labelText: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
    placeHolderText: '',
    onChange: () => {},
    labelText: 'Provide labelText',
  };

  state = {
    hasContent: this.props.value || this.props.defaultValue || false,
  };

  clearInput = evt => {
    if (!this.props.value) {
      this.input.value = '';
      this.props.onChange(evt);
    } else {
      const clearedEvt = Object.assign({}, evt.target, {
        target: {
          value: '',
        },
      });
      this.props.onChange(clearedEvt);
    }

    this.setState({ hasContent: false }, () => this.input.focus());
  };

  handleChange = evt => {
    this.setState({
      hasContent: evt.target.value !== '',
    });

    this.props.onChange(evt);
  };

  render() {
    const { className, type, id, placeHolderText, labelText, ...other } = this.props;

    const { hasContent } = this.state;

    const searchClasses = classNames({
      'bx--search': true,
      [className]: className,
    });

    const clearClasses = classNames({
      'bx--search-close': true,
      'bx--search-close--hidden': !hasContent,
    });

    return (
      <div className={searchClasses} role="search">
        <div className="bx--search-bar" role="presentation">
          <Icon name="search" description="search" className="bx--search-magnifier" />
          <input
            {...other}
            type={type}
            className="bx--search-input"
            id={id}
            placeholder={placeHolderText}
            onChange={this.handleChange}
            ref={input => {
              this.input = input;
            }}
          />
          <span className="bx--mi__underline" />
          <label htmlFor={id} className="bx--label">
            {labelText}
          </label>
          <Icon
            name="close"
            description="close"
            className={clearClasses}
            onClick={this.clearInput}
          />
        </div>
      </div>
    );
  }
}
