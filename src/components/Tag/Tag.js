import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export default class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTag: true,
    };
  }

  static propTypes = {
    action: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.oneOf(['dark', 'light']),
    role: PropTypes.string,
    tabindex: PropTypes.string,
    remove: PropTypes.bool,
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
    style: 'dark',
    role: 'tag',
    tabindex: '0',
    remove: false,
    action: null,
  };

  buildAction = () => {
    const { action } = this.props;

    if (action) {
      const actionClasses = classNames({
        'bx--tag--left': true,
        [`bx--tag--left__${action}`]: true,
      });

      return (
        <Icon
          name={action === 'remove' ? 'error' : this.props.action}
          className={actionClasses}
          description={this.props.actionDescription}
          tabIndex="0"
          onClick={action === 'remove' ? this.removeTag : this.props.actionFunction}
        />
      );
    }

    return;
  };

  removeTag = () => {
    this.setState({ showTag: false });
  };

  render() {
    const { children, className, style, role, tabindex, remove, ...rest } = this.props;

    const tagClasses = classNames({
      'bx--tag': true,
      'bx--tag--remove': remove,
      'bx--tag--dark': style === 'dark',
      'bx--tag--light': style === 'light',
      [className]: className,
    });

    const actionIcon = this.buildAction();

    return this.state.showTag ? (
      <li className="bx--tag--item">
        {actionIcon}
        <span className={tagClasses} tabIndex={tabindex} role={role} {...rest}>
          {children}
          {remove && (
            <Icon
              name="close"
              className="bx--remove__icon"
              description="remove tag"
              onClick={this.props.onClick || this.removeTag}
            />
          )}
        </span>
      </li>
    ) : (
      ''
    );
  }
}
