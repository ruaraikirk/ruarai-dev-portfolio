import React from 'react';
import PropTypes from 'prop-types';
import LinkAnimated from './LinkAnimated';

const RouteLink = ({ onClick, selected, name }) => (
  <div>
      <LinkAnimated onClick={onClick} selected={selected}>
          {name}
      </LinkAnimated>
  </div>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
};

export default RouteLink;
