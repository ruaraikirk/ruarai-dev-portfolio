/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image';
import { Box, Flex } from 'rebass/styled-components';
import Section from '../components/Section'
import { Triangle } from '../components/Triangle'
import { Fade } from "react-reveal"
import styled from "styled-components"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import { Icon, Switch } from "@material-ui/core"
import NightsStayIcon from "@material-ui/icons/NightsStay"

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="primaryLight"
      height={['20vh', '8vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['10vh', '20vh']}
      width={['75vw', '70vw']}
      invertX
    />

    <Triangle
      color="primary"
      height={['10vh', '8vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const StyledIcon = styled(Icon)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
`;

const StyledPara = styled.p`
  color: ${(props) => props.theme.colors.text};
  a:link {
    text-decoration: none !important;
    color: inherit;
  }
  a:hover {
    text-decoration: none !important;
    color: inherit;
  }
  a:visited {
    text-decoration: none !important;
    color: inherit;
  }
`;

const StyledAnchor = styled.a`
  border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
  box-shadow: inset 0 -4px 0 ${(props) => props.theme.colors.secondary}
  transition: background 0.1s cubic-bezier(.33,.66,.66,1);
  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }
`;

const DarkModeToggle = ({ checked, toggleTheme }) => {
  return (
    <Flex justifyContent="center" alignItems="center" mb={[4,0]}>
      <StyledIcon><WbSunnyIcon /></StyledIcon>
      <Switch
        checked={checked === "dark"}
        onChange={toggleTheme}
        color="default"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <StyledIcon><NightsStayIcon /></StyledIcon>
    </Flex>
  )
};

const Bio = (props) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 270, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          social {
            linkedin
          }
        }
      }
    }
  `)
  const { author, description, social } = data.site.siteMetadata;

  return (
    <Container id="bio" Background={Background}>
      <Header name="About" icon="🙋‍️" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 2/3, 2/3]} px={[1, 2, 4]}>
          <Fade bottom>
            <StyledPara>
              Hi, I'm <strong>{author}</strong>. {description}
              {` `}
              <StyledAnchor href={`https://www.linkedin.com/in/${social.linkedin}`}>
                You should add me on LinkedIn!
              </StyledAnchor>
            </StyledPara>
          </Fade>
          <Fade bottom delay={200}>
            <StyledPara>
              This site is powered by React, Gatsby, Rebass (styled-component system) and Netlify, as well as some other nice tools.
              You can check out the repo <StyledAnchor href={`https://github.com/ruaraikirk/ruarai-dev-portfolio`}>here</StyledAnchor>. (Psst...check out dark mode toggle below!)
            </StyledPara>
            <DarkModeToggle checked={props.checked} toggleTheme={props.toggleTheme} />
          </Fade>
        </Box>
        <Fade right>
          <Box
            width={[1, 2/3, 1/3]}
            style={{ maxWidth: "270px" }}
          >
            <Fade right>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: "100%",
                }}
                imgStyle={{
                  borderRadius: "50%",
                }}
              />
            </Fade>
          </Box>
        </Fade>
      </Flex>
    </Container>
  )
}

export default Bio
