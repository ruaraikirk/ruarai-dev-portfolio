/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image';
import { Box, Flex } from 'rebass/styled-components';
import Section from '../components/Section'
import { Triangle } from '../components/Triangle'
import { Fade } from "react-reveal"
import styled from "styled-components"

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

const StyledPara = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

const StyledUnorderedList = styled.ul`
  margin: 0;
`;

const StyledListItem = styled.li`
  margin: 1em 0px;
  line-height: 2em;
`;

const StyledAnchor = styled.span`
  display: inline-block;
  transition: color 250ms ease 0s, text-shadow 250ms ease 0s;
  position: relative;
  text-decoration: none;
  &:after {
    position: absolute;
    z-index: -1;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: all 250ms ease 0s;
  }
`;

const Bio = () => {
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

  const { author, description, social } = data.site.siteMetadata
  return (
    <Container id="bio" Background={Background}>
      <Header name="About me" icon="🙋‍️" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 2/3, 2/3]} px={[1, 2, 4]}>
          <Fade bottom>
            <StyledPara>
              Portfolio site by <strong>{author}</strong> {description}
              {` `}
              <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
                You should add him on LinkedIn!
              </a>

              <StyledUnorderedList>
                <StyledListItem>
                  <StyledAnchor>Technologies:</StyledAnchor> Displays some of the technologies and libraries that Ruarai is familiar with.
                </StyledListItem>
                <StyledListItem>
                  <StyledAnchor>Projects:</StyledAnchor>  Contains links to some of the personal and professional projects he has worked on.
                </StyledListItem>
                <StyledListItem>
                  <StyledAnchor>Opensource:</StyledAnchor> This section outlines some of the opensource projects Ruarai has contributed to.
                </StyledListItem>
                <StyledListItem>
                  <StyledAnchor>Experience:</StyledAnchor> A timeline of his academic and professional experience.
                </StyledListItem>
                <StyledListItem>
                  <StyledAnchor>Blog:</StyledAnchor> An archive of writing attempts 🙈.
                </StyledListItem>
              </StyledUnorderedList>

              This site is built with Gatsby, Rebass (styled-component system) and Netlify, as well as some other nice tools. (Psst...check out dark mode!)
            </StyledPara>
          </Fade>
        </Box>
        <Fade right>
          <Box
            width={[1, 2/3, 1/3]}
            style={{ maxWidth: '270px' }}
          >
            <Fade right>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
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
