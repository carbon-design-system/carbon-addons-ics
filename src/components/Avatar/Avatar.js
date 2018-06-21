import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

const avatarSizes = {
  xs: { avatar: 32, icon: 16 },
  sm: { avatar: 40, icon: 20 },
  md: { avatar: 56, icon: 28 },
  lg: { avatar: 80, icon: 36 },
  xl: { avatar: 112, icon: 48 },
  xxl: { avatar: 176, icon: 72 },
};

export default class Avatar extends Component {
  render() {
    const { className, size, description, ...rest } = this.props;

    const cardClasses = classNames({
      'bx--avatar': true,
      [className]: className,
    });

    const avatarSize = avatarSizes[size].avatar;
    const iconSize = avatarSizes[size].icon.toString();

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
          description={description}
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
