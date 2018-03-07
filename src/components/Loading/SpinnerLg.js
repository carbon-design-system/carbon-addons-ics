import React from 'react';

const SpinnerLg = (
  <div>
    <svg className="bx--loading__svg-lg" viewBox="-75 -75 150 150">
      <circle className="bx--loading__center-outer" cx="0" cy="0" r="70" />
      <circle className="bx--loading__center-inner" cx="0" cy="0" r="65" />
      <circle className="bx--loading__circle" cx="0" cy="0" r="37.5" />
    </svg>
    <div className="bx--loading__orb-1" />
    <div className="bx--loading__orb-2" />
    <div className="bx--loading__orb-3" />
    <div className="bx--loading__orb-4" />
    <div className="bx--loading__orb-5" />
  </div>
);

export default SpinnerLg;
