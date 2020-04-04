import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function HiddenBox(props) {
  const {
    children, showIf
  } = props;

  if (!showIf) {
    return <Fragment />;
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

HiddenBox.defaultProps = {
  showIf: true
};
HiddenBox.propTypes = {
  children: PropTypes.any.isRequired,
  showIf: PropTypes.bool
};
