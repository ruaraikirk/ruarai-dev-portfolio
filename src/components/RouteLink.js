import React from 'react';
import PropTypes from 'prop-types';

const RouteLink = ({ onClick, selected, name }) => (
  <div>
    <span onClick={onClick} selected={selected}>
      {name}
    </span>
  </div>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
};

export default RouteLink;
