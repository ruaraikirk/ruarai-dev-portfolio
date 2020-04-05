
import React, { Fragment, useState } from 'react';
import Headroom from 'react-headroom';
// import { Flex, Image } from 'rebass';
import styled from 'styled-components';
import { SectionLinks } from 'react-scroll-section';
import { Fade } from 'react-reveal';
import RouteLink from './RouteLink';
import { Squash as Hamburger } from 'hamburger-react'
import Gatsby from '../../content/assets/gatsby-icon.png';
import HiddenBox from "./HiddenBox"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: blue;
  }
  position: absolute;
  width: 100%;
`;

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

const Header = () => {
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
                <img
                  src={Gatsby}
                  width="50px"
                  alt="Portfolio Logo"
                  onClick={() =>{
                    setOpen(false);
                    home.onClick();
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                />
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

              return (
                <Fragment>
                  {homeLink}
                  <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                  />
                  <HiddenBox
                    showIf={isOpen === true}
                  >
                    <Fade><div>{navLinks}</div></Fade>
                  </HiddenBox>
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
