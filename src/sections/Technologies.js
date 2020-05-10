import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Chip, Avatar } from "@material-ui/core"
import Section from '../components/Section'
import { Triangle } from '../components/Triangle'
import styled from "styled-components"
// import { Box, Flex, Image, Text } from "rebass/styled-components"
import { Box, Flex, Text } from "rebass/styled-components"
import { Card, CardContainer } from "../components/Card"
import SocialLink from "../components/SocialLink"
import ImageSubtitle from "../components/ImageSubtitle"
import Hide from "../components/Hide"
import Fade from "react-reveal/Fade"

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="primaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="primary"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '180px';
const CARD_WIDTH = '180px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const TechImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;
  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const TechTag = styled.div`
  // position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */
  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const TechCard = styled(Card)`
  width: ${CARD_WIDTH};
  background-color: ${(props) => props.theme.colors.backgroundDark};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_WIDTH} - 50px);
    padding: 10px;
  }
`;

const Technology = ({name, website, stack, featuredImage}) => (
  <TechCard p={0} >
    <Flex sx={{ height: CARD_HEIGHT }}>
      <ImageContainer>
        <TechImage
          fluid={featuredImage}
          alt={name}
        />
        <TechTag>
          <Flex
            justifyContent="space-around"
          >
          </Flex>
          <ImageSubtitle bg="primary" color="text" y="bottom">
            {stack}
          </ImageSubtitle>
          <ImageSubtitle bg="secondary" color="text" x="right">
            {name}
          </ImageSubtitle>
        </TechTag>
      </ImageContainer>
    </Flex>
  </TechCard>
);

const fakeTechnology = {
  id: 1,
  name: 'Fake Tech',
  description: 'Description',
  website: 'https://material-ui.com/components/material-icons/',
  stack: 'FRONTEND',
  logo: 'https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg'
};

const Technologies = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(\\/content\\/technologies)/.*\\\\.md$/"}}
      ) {
        edges {
          node {
            frontmatter {
              title
              stack
              website
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const technologies = data.allMarkdownRemark.edges

  return (
    <Container id="technologies" Background={Background}>
      <Header name="Technologies" icon="🛠" label="tools"  />
      {/*<div style={{ display: 'flex', justifyContent: 'center' }}>*/}
      {/*  <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>*/}
      {/*    {technologies.map(technology => {*/}
      {/*      const { node: {frontmatter: { title, stack, website, featuredImage: { childImageSharp: { fluid } } } } } = technology;*/}
      {/*      return (*/}
      {/*        <Fade bottom delay={200} key={`tech_${title}`}>*/}
      {/*          <Technology*/}
      {/*            name={title}*/}
      {/*            website={website}*/}
      {/*            stack={stack}*/}
      {/*            featuredImage={fluid}*/}
      {/*          />*/}
      {/*        </Fade>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Flex flexWrap='wrap' alignSelf='center' maxWidth={[300, 790]} mx={-2}>
        {technologies.map(technology => {
          const { node: {frontmatter: { title, stack, website, featuredImage: { childImageSharp: { fluid } } } } } = technology;
          return (
            <Fade bottom delay={200} key={`tech_${title}`}>
              <Box px={2} py={2} width={1/4}>
                <Technology
                  name={title}
                  website={website}
                  stack={stack}
                  featuredImage={fluid}
                />
              </Box>
            </Fade>
          )
        })}
      </Flex>
    </Container>
  )
}

Technologies.defaultProps = {

}

Technologies.propTypes = {

}

export default Technologies
