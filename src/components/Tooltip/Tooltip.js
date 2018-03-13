import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import classNames from 'classnames';
// import FloatingMenu from 'carbon-components-react/lib/internal/FloatingMenu';
import FloatingMenu from '../../globals/internal/FloatingMenu';

export default class Tooltip extends Component {
  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    direction: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
    menuOffset: PropTypes.object,
    triggerText: PropTypes.string,
    showIcon: PropTypes.bool,
    iconName: PropTypes.string,
    iconDescription: PropTypes.string,
  };

  static defaultProps = {
    open: false,
    direction: 'bottom',
    showIcon: true,
    iconName: 'info',
    iconDescription: 'tooltip',
    triggerText: 'Provide triggerText',
    menuOffset: {},
  };

  state = {
    open: this.props.open,
  };

  componentDidMount() {
    requestAnimationFrame(() => {
      /* istanbul ignore next */
      this.getTriggerPosition();
    });
  }

  getTriggerPosition = () => {
    if (this.triggerEl) {
      const triggerPosition = this.triggerEl.getBoundingClientRect();
      this.setState({ triggerPosition });
    }
  };

  handleFocus = direction => {
    /* istanbul ignore next */
    if (direction === 'focus') {
      this.getTriggerPosition();
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  };

  render() {
    const {
      children,
      className,
      direction,
      triggerText,
      showIcon,
      iconName,
      iconDescription,
      menuOffset,
      ...rest
    } = this.props;

    const tooltipClasses = classNames(
      'bx--tooltip',
      { 'bx--tooltip--shown': this.state.open },
      className,
    );

    return (
      <div>
        {showIcon ? (
          <div className="bx--tooltip__trigger">
            {triggerText}
            <div
              ref={node => {
                this.triggerEl = node;
              }}
              onFocus={() => this.handleFocus('focus')}
              onBlur={() => this.handleFocus('blur')}
              className="bx--tooltip__icon-container"
            >
              <Icon
                role="button"
                tabIndex="0"
                name={iconName}
                description={iconDescription}
                className="bx--tooltip__icon"
              />
            </div>
          </div>
        ) : (
          <div
            className="bx--tooltip__trigger"
            ref={node => {
              this.triggerEl = node;
            }}
            onFocus={() => this.handleMouse('over')}
            onBlur={() => this.handleMouse('out')}
          >
            {triggerText}
          </div>
        )}
        <FloatingMenu
          menuPosition={this.state.triggerPosition}
          menuDirection={direction}
          menuOffset={menuOffset}
        >
          <div className={tooltipClasses} {...rest} data-floating-menu-direction={direction}>
            {children}
          </div>
        </FloatingMenu>
      </div>
    );
  }
}
