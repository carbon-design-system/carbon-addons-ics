import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Tab, Icon } from 'carbon-components-react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      hint: false,
    };
  }

  static propTypes = {
    backwardText: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    forwardText: PropTypes.string,
    hintText: PropTypes.string,
    isLastPage: PropTypes.bool,
    onChange: PropTypes.func,
    page: PropTypes.number,
    totalItems: PropTypes.number,
  };

  static defaultProps = {
    backwardText: 'Backward',
    disabled: false,
    forwardText: 'Forward',
    hintText: 'Use ← left and right → arrow keys to navigate',
    isLastPage: false,
    onChange: () => {},
    page: 1,
  };

  incrementPage = () => {
    const page = this.state.page + 1;
    this.setState({ page });
    const tab = this[`tab${page}`];
    tab.tabAnchor.focus();
    this.props.onChange({ page });
  };

  decrementPage = () => {
    const page = this.state.page - 1;
    this.setState({ page });
    const tab = this[`tab${page}`];
    tab.tabAnchor.focus();
    this.props.onChange({ page });
  };

  handlePageChange = page => {
    if (page > 0 && page <= this.props.totalItems) {
      this.setState({ page });
      this.props.onChange({ page });
    }
  };

  handleClick = (page, label, evt) => {
    evt.preventDefault();
    this.handlePageChange(page);
  };

  handleTabKeyDown = (page, label, evt) => {
    const key = evt.key || evt.which;
    if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
      this.handlePageChange(page);
    }
  };

  getTabAt = index => {
    return this[`tab${index}`] || React.Children.toArray(this.props.children)[index];
  };

  handleTabAnchorFocus = page => {
    const tabCount = this.props.totalItems;
    let tabIndex = page;

    if (page <= 0) {
      tabIndex = tabCount;
    } else if (page > tabCount) {
      tabIndex = 1;
    }

    const tab = this.getTabAt(tabIndex);
    if (tab) {
      this.handlePageChange(tabIndex);
      if (tab.tabAnchor) {
        tab.tabAnchor.focus();
      }
    }
  };

  renderTabItems = () => {
    let page = 1;
    let tabs = [];
    while (page <= this.props.totalItems) {
      const selected = this.state.page === page;
      tabs.push(
        <Tab
          key={`pagination-tab-${page}`}
          index={page}
          label={page.toString()}
          handleTabClick={this.handleClick}
          handleTabKeyDown={this.handleTabKeyDown}
          handleTabAnchorFocus={this.handleTabAnchorFocus}
          onFocus={this.showHint}
          onBlur={this.hideHint}
          selected={selected}
          ref={pageTab => {
            pageTab && (this[`tab${pageTab.props.index}`] = pageTab);
          }}
        />,
      );
      page++;
    }
    return tabs;
  };

  showHint = () => {
    this.setState({ hint: true });
  };

  hideHint = () => {
    this.setState({ hint: false });
  };

  render() {
    const {
      className,
      hintText,
      isLastPage,
      totalItems,
      page: pageNumber, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const statePage = this.state.page;
    const classNames = classnames({
      'bx--pagination': true,
      [className]: className,
    });
    const tabItems = this.renderTabItems();

    return (
      <div className={classNames} {...rest}>
        <div className="bx--pagination__left">
          <button
            className="bx--btn bx--btn--secondary"
            onClick={this.decrementPage}
            disabled={this.props.disabled || statePage === 1}
          >
            <Icon className="bx--pagination__previous" name="left" height="16" width="16" />
          </button>
        </div>
        <div className="bx--pagination__center">
          <nav className="bx--tabs">
            <ul className="bx--tabs__nav bx--tabs__nav--hidden" role="tablist">
              {tabItems}
            </ul>
          </nav>
          <div className="bx--pagination__hint" style={{ opacity: this.state.hint ? 1 : 0 }}>
            {hintText}
          </div>
        </div>
        <div className="bx--pagination__right">
          <button
            className="bx--btn bx--btn--secondary"
            onClick={this.incrementPage}
            disabled={this.props.disabled || statePage === totalItems || isLastPage}
          >
            <Icon className="bx--pagination__next" name="right" height="16" width="16" />
          </button>
        </div>
      </div>
    );
  }
}
