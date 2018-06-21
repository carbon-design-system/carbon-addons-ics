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
  state = {
    imgLoaded: false,
  };

  onImgLoad() {
    if (this.imageDOM.naturalWidth < 2 && this.imageDOM.naturalHeight < 2 && !this.state.ImgError) {
      this.onImgErr();
    } else {
      this.setState({ ImgLoaded: true });
    }
  }

  onImgErr() {
    this.setState({ imgUrl: null, ImgError: true });
  }

  render() {
    const { className, size, description, imgUrl, ...rest } = this.props;

    const cardClasses = classNames({
      'bx--avatar': true,
      [className]: className,
    });

    const avatarSize = avatarSizes[size].avatar;
    const iconSize = avatarSizes[size].icon.toString();

    let imageElement;
    let imageAlt = '';

    if (this.state.imgLoaded) {
      imageAlt = description;
    }

    if (this.props.imgUrl) {
      imageElement = (
        <img
          ref={ref => (this.imageDOM = ref)}
          onError={() => this.onImgErr()}
          onLoad={() => this.onImgLoad()}
          src={imgUrl}
          alt={imageAlt}
          height={avatarSize}
          width={avatarSize}
          className={'bx--avatar_img'}
        />
      );
    } else {
      imageElement = (
        <Icon
          height={iconSize}
          width={iconSize}
          description={description}
          name={'profiles--glyph'}
          fill={'white'}
        />
      );
    }

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
        {imageElement}
      </div>
    );
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  imgUrl: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'md',
};
