import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export default class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: this.props.action,
      actionIconName: this.props.action,
      actionDescription: '',
      actionFunction: null,
      showTag: true,
    };
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.oneOf(['dark', 'light']),
    role: PropTypes.string,
    tabindex: PropTypes.string,
    remove: PropTypes.bool,
    action: PropTypes.string,
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

  componentDidMount() {
    switch (this.props.action) {
      case 'add':
        this.setState({
          actionDescription: 'add tag',
          actionFunction: this.props.onClick || this.state.actionFunction,
        });
        break;
      case 'success':
        this.setState({
          actionDescription: 'success"',
        });
        break;
      case 'remove':
        this.setState({
          actionIconName: 'error',
          actionDescription: 'remove tag',
          actionFunction: this.props.onClick || this.removeTag.bind(this),
        });
        break;
    }
  }

  removeTag() {
    this.setState({ showTag: false });
  }

  render() {
    const {
      children,
      className,
      style,
      role,
      tabindex,
      remove,
      leftAction, // eslint-disable-line no-unused-vars
      action,
      ...rest
    } = this.props;

    const tagClasses = classNames({
      'bx--tag': true,
      'bx--tag--remove': remove,
      'bx--tag--dark': style === 'dark',
      'bx--tag--light': style === 'light',
      [className]: className,
    });

    const actionClasses = classNames({
      'bx--tag--left': true,
      [`bx--tag--left__${action}`]: true,
    });

    return this.state.showTag ? (
      <li className="bx--tag--item">
        {action && (
          <Icon
            name={this.state.actionIconName}
            className={actionClasses}
            description={this.state.actionDescription}
            tabIndex="0"
            onClick={this.state.actionFunction}
          />
        )}
        <span className={tagClasses} tabIndex={tabindex} role={role} {...rest}>
          {children}
          {remove && (
            <Icon
              name="close"
              className="bx--remove__icon"
              description="remove tag"
              onClick={this.props.onClick || this.removeTag.bind(this)}
            />
          )}
        </span>
      </li>
    ) : (
      ''
    );
  }
}
