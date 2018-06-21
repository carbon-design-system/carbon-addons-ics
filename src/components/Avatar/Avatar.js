import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

const avatarSizes = {
  xs: 32,
  sm: 40,
  md: 56,
  lg: 80,
  xl: 112,
  xxl: 176,
};

export default class Avatar extends Component {
  render() {
    const { className, size, name, ...rest } = this.props;

    const cardClasses = classNames({
      'bx--avatar': true,
      [className]: className,
    });

    const avatarSize = avatarSizes[size];

    const iconSize = (avatarSize - 10).toString();

    return (
      <div
        className={cardClasses}
        style={{
          height: avatarSize,
          width: avatarSize,
          backgroundColor: '#A6A5A6', // gray-30: This is an intentionally hardcoded, non-themeable color value
        }}
        {...rest}
      >
        <Icon
          height={iconSize}
          width={iconSize}
          description={name}
          name={'profiles--glyph'}
          fill={'white'}
        />
      </div>
    );
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'md',
};
