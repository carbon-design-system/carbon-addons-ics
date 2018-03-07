import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { SpinnerLg, SpinnerSml } from '../Loading';

export default class Loading extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    withOverlay: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    active: true,
    withOverlay: true,
    size: 'small',
  };

  render() {
    const { active, className, withOverlay, size, ...rest } = this.props;

    const small = size === 'small' ? true : false;
    const large = size === 'large' ? true : false;

    const loadingClasses = classNames(className, {
      'bx--loading': small,
      'bx--loading--small': small,
      'bx--loading--stop': !active,
      'bx--loading-orbs': large,
    });

    const loading = (
      <div {...rest} className={loadingClasses}>
        {small ? SpinnerSml : SpinnerLg}
      </div>
    );

    return withOverlay ? <div className="bx--loading-overlay">{loading}</div> : loading;
  }
}
