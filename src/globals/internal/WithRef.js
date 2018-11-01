import React from 'react';
import PropTypes from 'prop-types';

export default function WithRef(WrappedComponent) {
  const withRef = React.forwardRef((props, ref) => <WrappedComponent _innerRef={ref} {...props} />);
  withRef.propTypes = {
    ...WrappedComponent.propTypes,
    ref: PropTypes.object,
  };
  withRef.displayName = `WithRef(${getDisplayName(WrappedComponent)})`;
  return withRef;
}

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
