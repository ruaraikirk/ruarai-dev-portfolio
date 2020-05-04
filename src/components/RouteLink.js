import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass/styled-components';
import LinkAnimated from "./LinkAnimated"

const RouteLink = ({ onClick, selected, name }) => (
  <div>
    {/*<span onClick={onClick} selected={selected}>*/}
      <LinkAnimated onClick={onClick} selected={selected}>
        {/*<Heading color="text" mb={[4, 3]} fontSize={[ 3, 4, 5 ]}>*/}
          {name}
        {/*</Heading>*/}
      </LinkAnimated>
    {/*</span>*/}
  </div>
);

RouteLink.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  name: PropTypes.string,
};

export default RouteLink;
