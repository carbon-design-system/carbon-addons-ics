import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

export default class CardText extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {};

  render() {
    const { className, children, ...rest } = this.props;

    const cardTextClasses = classNames({
      'bx--card__text': true,
      [className]: className,
    });

    return (
      <div {...rest} className={cardTextClasses}>
        {children}
      </div>
    );
  }
}
