import PropTypes from 'prop-types';
import React, { Component, forwardRef, createRef } from 'react';
import classnames from 'classnames';
import { Tooltip } from 'carbon-components-react';

const PagerListItem = forwardRef(({ selected, currentPage, onKeyUp, onClick }, ref) => {
  const classes = classnames('bx--pager__page-item', {
    'bx--pager-item--selected': selected,
  });

  return (
    <button
      onKeyUp={onKeyUp}
      onClick={onClick}
      onKeyDown={e => {
        e.key === 'Enter' ? e.preventDefault() : '';
      }}
      className={classes}
      type="button"
      ref={ref}
    >
      {currentPage}
    </button>
  );
});

PagerListItem.propTypes = {
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  currentPage: PropTypes.number,
  selected: PropTypes.bool,
};

export default class Pager extends Component {
  static maxQueuePages = 3;
  constructor(props) {
    super(props);
    const { totalItems, initialPage } = this.props;
    const lower = [2, 3];
    const higher = [totalItems - 2, totalItems - 1];
    const pagesArr = Array.from(new Array(totalItems), (val, index) => index + 1);
    const maxDisplayPages = 5;

    this.state = {
      activePage: initialPage,
      leftPageQueue: lower,
      rightPageQueue: higher,
      activeQueue: totalItems <= maxDisplayPages ? pagesArr : lower,
      truncate: totalItems > maxDisplayPages,
      showLower: initialPage < Pager.maxQueuePages,
      showCenter: initialPage > Pager.maxQueuePages,
      showHigher: initialPage >= totalItems - 2,
    };
    // this technically creates too many refs, but refs are pretty cheap so its ok to make extras
    this.pagerRefs = Array.from(new Array(totalItems), createRef);
  }

  static propTypes = {
    className: PropTypes.string,
    initialPage: PropTypes.number,
    totalItems: PropTypes.number,
    onClick: PropTypes.func,
    onKeyUp: PropTypes.func,
    backwardText: PropTypes.string,
    forwardText: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    onKeyUp: () => {},
    initialPage: 1,
    backwardText: 'previous page',
    forwardText: 'next page',
  };

  updatePageQueue = () => {
    const { truncate, activePage } = this.state;

    if (!truncate) return;
    if (activePage <= Pager.maxQueuePages) {
      this.setState(
        {
          activeQueue: this.state.leftPageQueue,
          showLower: true,
          showCenter: false,
          showHigher: false,
        },
        () => {
          this.pagerRefs[activePage - 1].current.focus();
        },
      );
    } else if (activePage >= this.props.totalItems - Pager.maxQueuePages + 1) {
      this.setState(
        {
          activeQueue: this.state.rightPageQueue,
          showLower: false,
          showCenter: false,
          showHigher: true,
        },
        () => {
          this.pagerRefs[activePage - 1].current.focus();
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
          this.pagerRefs[activePage - 1].current.focus();
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
      <Tooltip triggerText="" iconName={iconInfo.name} className="bx--pager__button-icon">
        {iconInfo.description}
      </Tooltip>
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
    const { activePage, activeQueue, truncate, showLower, showCenter, showHigher } = this.state;

    const classNames = classnames(className, {
      'bx--pager': true,
    });

    const backwardIcon = {
      name: 'chevron--left',
      description: backwardText,
    };
    const forwardIcon = {
      name: 'chevron--right',
      description: forwardText,
    };

    const ellipsis = <span className="bx--pager-ellipsis">...</span>;

    const pageQueue = activeQueue.map(page => {
      return (
        <li key={`pager-${page}`} index={page}>
          <PagerListItem
            onClick={this.handleClick.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
            selected={activePage === page}
            currentPage={page}
            ref={this.pagerRefs[page - 1]}
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
          {!truncate && <ul className="bx--pager__page-list">{pageQueue}</ul>}
          {truncate && (
            <ul className="bx--pager__page-list">
              <li key={'pager-1'} index={1}>
                <PagerListItem
                  onClick={this.handleClick.bind(this)}
                  onKeyUp={this.onKeyUp.bind(this)}
                  selected={activePage === 1}
                  currentPage={1}
                  ref={this.pagerRefs[0]}
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
                      ref={this.pagerRefs[activePage - 1]}
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
                  ref={this.pagerRefs[totalItems - 1]}
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
