import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

export default class CardMedia extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string,
    src: PropTypes.string,
    altText: PropTypes.string,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
  };

  static defaultProps = {
    type: 'img',
    src: '',
    altText: 'Set alt text',
  };

  render() {
    const { className, children, type, src, altText, ...rest } = this.props;

    const cardMediaClasses = classNames({
      'bx--card__media': true,
      [className]: className,
    });

    return (
      <div {...rest} className={cardMediaClasses}>
        {type === 'img' && <img src={src} alt={altText} className="bx--card__media-img" />}
        {children}
      </div>
    );
  }
}
