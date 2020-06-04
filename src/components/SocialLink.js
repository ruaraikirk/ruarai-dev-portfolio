import React from 'react';
import { Link } from 'rebass/styled-components';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GrGithub } from 'react-icons/gr';
import { GoGlobe } from 'react-icons/go';

// TODO Add tooltips

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${(props) =>
  props.theme.colors[props.color] || props.theme.colors.secondary};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ icon, name, url, color }) => (
    <IconLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
    >
      {icon === "github"
        ? <GrGithub onClick={() => window.open(url)} />
        : <GoGlobe onClick={() => window.open(url)} />}
    </IconLink>
);

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SocialLink;
