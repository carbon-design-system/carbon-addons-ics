import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { TooltipHover } from '../../index';

class PagerListItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
  };

  render() {
    return (
      <button
        className="bx--pager__list-item"
        onClick={this.props.onClick}
        onKeyUp={this.props.onKeyUp}
      >
        {this.props.children}
      </button>
    );
  }
}

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    const pageNum =
      this.props.totalItems.length <= this.props.max ? this.props.totalItems : this.props.max;
    this.state = {
      page: this.props.page,
      pages: Array.from(new Array(this.props.totalItems), (val, index) => index + 1),
      pageQueue: new Array(pageNum),
    };
  }

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    isLastPage: PropTypes.bool,
    page: PropTypes.number,
    totalItems: PropTypes.number,
    max: PropTypes.number,
    mid: PropTypes.number,
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    isLastPage: false,
    onClick: () => {},
    onKeyUp: () => {},
    page: 1,
    max: 5,
    mid: 3,
  };

  updatePageQueue = () => {
    // build pager layout for first page grouping
    if (this.state.page <= this.props.mid) {
      this.state.pageQueue = (
        <ul className="bx--pager__page-list">
          {this.state.pages.slice(0, this.props.max).map(page => {
            const selected = this.state.page === page;
            const classes = classnames('bx--pager__page-item', {
              'bx--pager-item--selected': selected,
            });
            return (
              <li
                key={`pager-page-${page}`}
                index={page}
                label={page.toString()}
                onFocus={this.handlePageChange}
                ref={li => {
                  this[`pager-page-${page}`] = li;
                }}
                className={classes}
              >
                <PagerListItem
                  onClick={this.handleClick.bind(this)}
                  onKeyUp={this.onKeyUp.bind(this)}
                >
                  {page}
                </PagerListItem>
              </li>
            );
          })}
        </ul>
      );
    } else if (this.state.page >= this.props.totalItems - this.props.mid + 1) {
      // build pager layout for last page grouping
      this.state.pageQueue = (
        <ul className="bx--pager__page-list">
          {this.state.pages
            .slice(this.props.totalItems - this.props.max, this.props.totalItems)
            .map(page => {
              const selected = this.state.page === page;
              const classes = classnames('bx--pager__page-item', {
                'bx--pager-item--selected': selected,
              });
              return (
                <li
                  key={`pager-page-${page}`}
                  index={page}
                  label={page.toString()}
                  onFocus={this.handlePageChange}
                  ref={li => {
                    this[`pager-page-${page}`] = li;
                  }}
                  className={classes}
                >
                  <PagerListItem
                    onClick={this.handleClick.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                  >
                    {page}
                  </PagerListItem>
                </li>
              );
            })}
        </ul>
      );
    } else {
      // build pager layout for middle page grouping
      this.state.pageQueue = (
        <ul className="bx--pager__page-list">
          {this.state.pages.slice(this.state.page - 3, this.state.page + 2).map(page => {
            const selected = this.state.page === page;
            const classes = classnames('bx--pager__page-item', {
              'bx--pager-item--selected': selected,
            });
            return (
              <li
                key={`pager-page-${page}`}
                index={page}
                label={page.toString()}
                onFocus={this.handlePageChange}
                ref={li => {
                  this[`pager-page-${page}`] = li;
                }}
                className={classes}
              >
                <PagerListItem
                  onClick={this.handleClick.bind(this)}
                  onKeyUp={this.onKeyUp.bind(this)}
                >
                  {page}
                </PagerListItem>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  onKeyUp = e => {
    switch (e.keyCode) {
      case 37:
        this.decrementPage();
        break;
      case 39:
        this.incrementPage();
        break;
      case 13:
        this.handleClick(e);
        break;
    }
    this.props.onKeyUp();
  };

  incrementPage = () => {
    const page = this.state.page + 1;
    if (page && page <= this.props.totalItems) {
      this.setState({ page });
      this.setState({ selected: page });
      this.updatePageQueue();
      this[`pager-page-${page}`].focus();
    }
  };

  decrementPage = () => {
    const page = this.state.page - 1;
    if (page && page >= 1) {
      this.setState({ page });
      this.updatePageQueue();
    }
  };

  rewind = () => {
    const page = 1;
    this.setState({ page });
    this.updatePageQueue();
  };

  fastForward = () => {
    const page = this.props.totalItems;
    this.setState({ page });
    this.updatePageQueue();
  };

  handlePageChange = page => {
    if (page && page <= this.props.totalItems) {
      this.setState({ page });
      this.updatePageQueue();
    }
  };

  handleClick = e => {
    const page = Number(e.target.innerHTML);
    this.handlePageChange(page);
    this.props.onClick({ page });
  };

  buildTooltip = iconInfo => {
    return (
      <TooltipHover
        text={iconInfo.description}
        iconName={iconInfo.name}
        className="bx--pager__button-icon"
      />
    );
  };

  setButtonClassNames = type => {
    return classnames({
      'bx--btn': true,
      'bx--btn--secondary': true,
      'bx--pager__button': true,
      [`bx--pager__button--${type}`]: true,
    });
  };

  render() {
    const {
      className,
      isLastPage,
      totalItems,
      page: pageNumber, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const statePage = this.state.page;
    const classNames = classnames({
      'bx--pager': true,
      [className]: className,
    });

    const backwardIcon = {
      name: 'left',
      description: 'previous page',
    };
    const forwardIcon = {
      name: 'right',
      description: 'next page',
    };
    const rewindIcon = {
      name: 'skip-left',
      description: 'go to first page',
    };
    const fastForwardIcon = {
      name: 'skip-right',
      description: 'go to last page',
    };

    this.updatePageQueue();

    return (
      <div className={classNames} {...rest}>
        {statePage > 1 && (
          <div className="bx--pager__left">
            <button
              className={this.setButtonClassNames('rewind')}
              onClick={this.rewind}
              disabled={false}
            >
              {this.buildTooltip(rewindIcon)}
            </button>
            <button
              className={this.setButtonClassNames('backward')}
              onClick={this.decrementPage}
              disabled={false}
            >
              {this.buildTooltip(backwardIcon)}
            </button>
          </div>
        )}

        <div className="bx--pager__center">{this.state.pageQueue}</div>

        {statePage < this.props.totalItems && (
          <div className="bx--pager__right">
            <button
              className={this.setButtonClassNames('forward')}
              onClick={this.incrementPage}
              disabled={this.props.disabled || statePage === totalItems || isLastPage}
            >
              {this.buildTooltip(forwardIcon)}
            </button>
            <button
              className={this.setButtonClassNames('fastforward')}
              onClick={this.fastForward}
              disabled={this.props.disabled || statePage === totalItems || isLastPage}
            >
              {this.buildTooltip(fastForwardIcon)}
            </button>
          </div>
        )}
      </div>
    );
  }
}
