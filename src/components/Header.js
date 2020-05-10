import React, { Fragment, useState } from 'react';
import Headroom from 'react-headroom';
import { Flex, Box } from "rebass/styled-components"
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import { Fade } from 'react-reveal';
import RouteLink from './RouteLink';
import { Squash as Hamburger } from 'hamburger-react'
import { graphql, useStaticQuery } from "gatsby"
import HomeIcon from '@material-ui/icons/Home';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { Icon, Switch } from "@material-ui/core"

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background-color: ${(props) => props.theme.colors.backgroundDark}f2;
  }
  position: absolute;
  width: 100%;
`;

const StyledMenu = styled.nav`
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${(props) => props.theme.colors.backgroundDark}f2;
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  height: 120vh;
  text-align: left;
  padding: 6rem 2rem 10rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
`;

const DarkModeToggle = ({ checked, toggleTheme }) => {

  return (
    <Flex justifyContent='space-around'>
      <StyledIcon><WbSunnyIcon fontSize="medium" /></StyledIcon>
      <Switch
        checked={checked}
        onChange={toggleTheme}
        color="default"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <StyledIcon><NightsStayIcon fontSize="medium" /></StyledIcon>
    </Flex>
  )
};

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
          ...acc,
          home: value,
        }
        : {
          ...acc,
          links: [...acc.links, { name: capitalize(key), value }],
        };
    },
    { links: [], home: null },
  );

const Header = (props) => {
  const [isOpen, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata

  return (
    <HeaderContainer>
      <Fade top>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3
          }}
        >
          <SectionLinks>
            {({ allLinks }) => {
              const { home, links } = formatLinks(allLinks);

              const homeLink = home && (
                <StyledIcon>
                  <HomeIcon fontSize="large" onClick={() => {
                    setOpen(false);
                    home.onClick();
                  }}/>
                </StyledIcon>
              );
              const navLinks = links.map(({ name, value }) => (
                <RouteLink
                  key={name}
                  onClick={() =>{
                    setOpen(false);
                    value.onClick();
                  }}
                  selected={value.selected}
                  name={name}
                />
              ));

              navLinks.push(<DarkModeToggle checked={props.checked} toggleTheme={props.toggleTheme} />);

              return (
                <Fragment>
                  <Box m={[1, 2, 3, 4]}>
                  {homeLink}
                  </Box>
                  <Box m={[1, 2, 3, 4]}>
                  <StyledIcon>
                    <Hamburger
                      toggled={isOpen}
                      toggle={setOpen}
                    />
                  </StyledIcon>
                  </Box>
                  <StyledMenu open={isOpen}>
                    {navLinks}
                  </StyledMenu>
                </Fragment>
              );
            }}
          </SectionLinks>
        </div>
      </Fade>
    </HeaderContainer>
  )
};

export default Header;
