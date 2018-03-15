import PropTypes from 'prop-types';
import React, { Component } from 'react';
import window from 'window-or-global';
import classnames from 'classnames';
import InteriorLeftNavList from '../InteriorLeftNavList';
import InteriorLeftNavItem from '../InteriorLeftNavItem';

export default class InteriorLeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHref: this.props.activeHref || (window.location && window.location.pathname),
    };
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    activeHref: PropTypes.string,
    onToggle: PropTypes.func,
  };

  static defaultProps = {
    onToggle: () => {},
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.activeHref) {
      this.setState({ activeHref: nextProps.activeHref });
    }
  };

  handleItemClick = (evt, href) => {
    evt.stopPropagation();

    // 13 = Enter, 32 = Spacebar
    const acceptableEvent = evt.which === 13 || evt.which === 32 || evt.type === 'click';
    const diffHref = href !== this.state.activeHref;
    if (acceptableEvent && diffHref) {
      this.setState({ activeHref: href });
    }
  };

  handleListClick = id => {
    this.props.children.forEach((child, index) => {
      if (child.type === InteriorLeftNavList) {
        const childId = `list-${index}`;
        if (childId !== id && !child.props.isExpanded) {
          this.refs[childId].close();
        }
      }
    });
  };

  toggle = evt => {
    evt.stopPropagation();
    this.props.onToggle(!this.state.open);
    this.setState({ open: !this.state.open });
  };

  buildNewListChild = (child, index) => {
    const key = `list-${index}`;
    return (
      <InteriorLeftNavList
        {...child.props}
        key={key}
        ref={key}
        id={key}
        onListClick={this.handleListClick}
        onItemClick={this.handleItemClick}
        activeHref={this.state.activeHref}
      />
    );
  };

  buildNewItemChild = (child, index) => {
    const key = `item-${index}`;
    return (
      <InteriorLeftNavItem
        {...child.props}
        key={key}
        onClick={this.handleItemClick}
        activeHref={this.state.activeHref}
      />
    );
  };

  render() {
    const {
      className,
      children,
      activeHref, // eslint-disable-line no-unused-vars
      onToggle, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const newChildren = React.Children.map(children, (child, index) => {
      if (child.type === InteriorLeftNavList) {
        return this.buildNewListChild(child, index);
      } else if (child.type === InteriorLeftNavItem) {
        return this.buildNewItemChild(child, index);
      }
      return child;
    });

    const classNames = classnames('bx--interior-left-nav-ics', className);

    return (
      <nav
        role="presentation"
        tabIndex={-1}
        aria-label="Interior Left Navigation"
        className={classNames}
        onClick={!this.state.open ? this.toggle : () => {}}
        onKeyPress={!this.state.open ? this.toggle : () => {}}
        {...rest}
      >
        <ul key="main_list" className="left-nav-list" role="menubar">
          {newChildren}
        </ul>
      </nav>
    );
  }
}
