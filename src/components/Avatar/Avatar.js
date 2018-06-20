import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const iconMap = {
  112: 48,
};

export default class Avatar extends Component {
  render() {
    return (
      <div className="bx--avatar" style={{ height: this.props.size, width: this.props.size }}>
        <Icon
          height={iconMap[this.props.size]}
          width={iconMap[this.props.size]}
          description={this.props.name}
          name="profiles"
          fill={'white'}
        />
      </div>
    );
  }
}

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  size: 32,
};
