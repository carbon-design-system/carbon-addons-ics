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

class Avatar extends Component {
  state = {
    imgLoaded: false,
  };

  componentWillMount() {
    this.setState({ imgUrl: this.props.imgUrl, ImgError: false, ImgLoaded: false });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.imgUrl !== nextProps.imgUrl) {
      this.setState({ imgUrl: nextProps.imgUrl, ImgError: false, ImgLoaded: false });
    }
  }

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
    const {
      className,
      description,
      size,
      imgUrl, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const cardClasses = classNames({
      'bx--avatar': true,
      [className]: className,
    });

    const avatarSize = avatarSizes[size].avatar;
    const iconSize = avatarSizes[size].icon.toString();

    const imageElement = this.state.imgUrl ? (
      <img
        ref={ref => (this.imageDOM = ref)}
        onError={() => this.onImgErr()}
        onLoad={() => this.onImgLoad()}
        src={this.state.imgUrl}
        alt={description}
        height={avatarSize}
        width={avatarSize}
        className={'bx--avatar_img'}
      />
    ) : null;

    const iconElement = (
      <div className={'bx--avatar_icon'}>
        <Icon
          height={iconSize}
          width={iconSize}
          description={description}
          name={'profiles--glyph'}
          fill={'white'}
        />
      </div>
    );

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
        {iconElement}
      </div>
    );
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  imgUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;
