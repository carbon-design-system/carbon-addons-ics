import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import WithRef from '../../globals/internal/WithRef';

class Cardv2 extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tabIndex: PropTypes.number,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    // added by WithRef higher order component
    // _innerRef: PropTypes.object,
  };

  static defaultProps = {
    tabIndex: 0,
  };

  render() {
    const { className, children, tabIndex, _innerRef, ...rest } = this.props;

    const cardClasses = classNames({
      'bx--cardv2': true,
      [className]: className,
    });

    return (
      <div {...rest} className={cardClasses} tabIndex={tabIndex} ref={_innerRef}>
        {children}
      </div>
    );
  }
}

export default WithRef(Cardv2);
export const UnwrappedComponent = Cardv2;
