import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { TooltipHover } from '../../index';

class PagerListItem extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
    currentPage: PropTypes.number,
    selected: PropTypes.bool,
    id: PropTypes.func,
  };

  render() {
    const { selected, currentPage } = this.props;
    const classes = classnames('bx--pager__page-item', {
      'bx--pager-item--selected': selected,
    });

    return (
      <button
        onKeyUp={this.props.onKeyUp}
        onClick={this.props.onClick}
        onKeyDown={e => {
          e.key === 'Enter' ? e.preventDefault() : '';
        }}
        className={classes}
        type="button"
        ref={this.props.id}
      >
        {currentPage}
      </button>
    );
  }
}

export default class Pager extends Component {
  constructor(props) {
    super(props);
    const { totalItems, initialPage, mid } = this.props;
    const lower = [2, 3];
    const higher = [totalItems - 2, totalItems - 1];
    const isSmall = totalItems <= this.props.max;
    const pagesArr = Array.from(new Array(totalItems), (val, index) => index + 1);

    this.state = {
      activePage: initialPage,
      leftPageQueue: lower,
      rightPageQueue: higher,
      activeQueue: isSmall ? pagesArr : lower,
      small: isSmall,
      showLower: initialPage < mid,
      showCenter: initialPage > mid,
      showHigher: initialPage >= totalItems - 2,
    };
  }

  static propTypes = {
    className: PropTypes.string,
    initialPage: PropTypes.number,
    totalItems: PropTypes.number,
    max: PropTypes.number,
    mid: PropTypes.number,
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
    backwardText: PropTypes.string,
    forwardText: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    onKeyUp: () => {},
    initialPage: 1,
    max: 5,
    mid: 3, // number of pages to show on lower/higher ends
    backwardText: 'previous page',
    forwardText: 'next page',
  };

  updatePageQueue = () => {
    const { small, activePage } = this.state;
    const pageFocus = `pager-${activePage}`;
    // Less than or equal to 3
    if (small) return;
    if (activePage <= this.props.mid) {
      this.setState(
        {
          activeQueue: this.state.leftPageQueue,
          showLower: true,
          showCenter: false,
          showHigher: false,
        },
        () => {
          this[pageFocus].focus();
        },
      );
    } else if (activePage >= this.props.totalItems - this.props.mid + 1) {
      this.setState(
        {
          activeQueue: this.state.rightPageQueue,
          showLower: false,
          showCenter: false,
          showHigher: true,
        },
        () => {
          this[pageFocus].focus();
        },
      );
    } else {
      this.setState(
        {
          showLower: false,
          showCenter: true,
          showHigher: false,
        },
        () => {
          this[pageFocus].focus();
        },
      );
    }
  };

  onKeyUp = e => {
    e.preventDefault();
    e.stopPropagation();
    switch (e.key) {
      case 'ArrowLeft':
        this.decrementPage();
        break;
      case 'ArrowRight':
        this.incrementPage();
        break;
      case 'Enter':
        this.handlePageChange(this.state.activePage);
        break;
      default:
        return;
    }
    this.props.onKeyUp();
  };

  incrementPage = () => {
    const page = this.state.activePage + 1;
    if (page && page <= this.props.totalItems) {
      this.handlePageChange(page);
    }
  };

  decrementPage = () => {
    const page = this.state.activePage - 1;
    if (page && page <= this.props.totalItems) {
      this.handlePageChange(page);
    }
  };

  handlePageChange = page => {
    this.setState(
      {
        activePage: page,
        selected: page,
      },
      () => {
        this.updatePageQueue();
      },
    );
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
    const { className, totalItems, backwardText, forwardText, ...rest } = this.props;
    const { activePage, activeQueue, small, showLower, showCenter, showHigher } = this.state;

    const classNames = classnames({
      'bx--pager': true,
      [className]: className,
    });

    const backwardIcon = {
      name: 'left',
      description: backwardText,
    };
    const forwardIcon = {
      name: 'right',
      description: forwardText,
    };

    const ellipsis = <span className="bx--pager-ellipsis">...</span>;

    const pageQueue = activeQueue.map(page => {
      return (
        <li key={`pager-${page}`} index={page}>
          <PagerListItem
            label={page.toString()}
            onClick={this.handleClick.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
            selected={activePage === page}
            currentPage={page}
            id={button => {
              this[`pager-${page}`] = button;
            }}
          />
        </li>
      );
    });

    return (
      <div className={classNames} {...rest}>
        {activePage > 1 && (
          <div className="bx--pager__left">
            <button className={this.setButtonClassNames('backward')} onClick={this.decrementPage}>
              {this.buildTooltip(backwardIcon)}
            </button>
          </div>
        )}

        <div className="bx--pager__center">
          {small && <ul className="bx--pager__page-list">{pageQueue}</ul>}
          {!small && (
            <ul className="bx--pager__page-list">
              <li key={'pager-1'} index={1}>
                <PagerListItem
                  onClick={this.handleClick.bind(this)}
                  onKeyUp={this.onKeyUp.bind(this)}
                  selected={activePage === 1}
                  currentPage={1}
                  id={button => {
                    this[`pager-1`] = button;
                  }}
                />
              </li>
              {showLower && pageQueue}
              {(showLower || showCenter) && ellipsis}
              {showCenter &&
                activePage !== totalItems &&
                activePage !== 1 && (
                  <li key={`pager-${activePage}`} index={activePage}>
                    <PagerListItem
                      onClick={this.handleClick.bind(this)}
                      onKeyUp={this.onKeyUp.bind(this)}
                      selected={true}
                      currentPage={activePage}
                      id={button => {
                        this[`pager-${activePage}`] = button;
                      }}
                    />
                  </li>
                )}
              {(showHigher || showCenter) && ellipsis}
              {showHigher && pageQueue}
              <li key={`pager-${totalItems}`} index={totalItems}>
                <PagerListItem
                  onClick={this.handleClick.bind(this)}
                  onKeyUp={this.onKeyUp.bind(this)}
                  selected={activePage === totalItems}
                  currentPage={totalItems}
                  id={button => {
                    this[`pager-${totalItems}`] = button;
                  }}
                />
              </li>
            </ul>
          )}
        </div>
        {activePage < totalItems && (
          <div className="bx--pager__right">
            <button className={this.setButtonClassNames('forward')} onClick={this.incrementPage}>
              {this.buildTooltip(forwardIcon)}
            </button>
          </div>
        )}
      </div>
    );
  }
}
