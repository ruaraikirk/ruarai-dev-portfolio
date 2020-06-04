import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { SectionLink } from 'react-scroll-section';
import HeroContent from '../components/HeroContent';
import MouseIcon from '../components/MouseIcon';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${(props) => props.height || '100vh'};
  opacity: 0.5;
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${(props) => props.fit || 'cover'} !important;
    object-position: ${(props) => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${(props) => props.fit || 'cover'} !important; object-position: ${(
  props,
) => props.position || '50% 50%'} !important;'
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      avatar: file(absolutePath: { regex: "/workstation.jpeg/" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
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
    <Container>
      <BgImage
        fluid={data.avatar.childImageSharp.fluid}
        alt={author}
      />
      <Overlay>
        <HeroContent />
        <SectionLink section="bio">
          {({ onClick }) => <MouseIcon onClick={onClick} />}
        </SectionLink>
      </Overlay>
    </Container>
  )
}

export default Hero
