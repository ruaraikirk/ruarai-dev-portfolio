import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Section from '../components/Section'
import { Triangle } from "../components/Triangle"
import styled from "styled-components"
import { Box, Flex, Heading, Text } from "rebass/styled-components"
import { Card } from "../components/Card"
import ImageSubtitle from "../components/ImageSubtitle"
import Fade from "react-reveal/Fade"
import SocialLink from "../components/SocialLink"

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={['15vh', '30vh']}
      width={['100vw', '100vw']}
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

// TODO Gatsby Image
const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const OpensourceCard = ({ name, description, projectYear, repositoryUrl, projectUrl }) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    style={{ height: '100%' }}
  >
    <Card pb={4}>
      <EllipsisHeading m={3} p={1} color="text">
        {name}
      </EllipsisHeading>
      <Flex
        style={{
          float: 'right',
        }}
      >
        <Box mx={1} fontSize={5}>
          <SocialLink
            name="Check repository"
            icon="github"
            url={repositoryUrl}
          />
        </Box>
        <Box mx={1} fontSize={5}>
          <SocialLink
            name="See project"
            icon="globe"
            url={projectUrl}
          />
        </Box>
      </Flex>
      <CoverImage src="https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg" height="200px" alt={name} />
      <Text m={3} color="text">
        {description}
      </Text>
      <ImageSubtitle bg="primary" color="white" x="right" y="bottom">
        {`${projectYear}`}
      </ImageSubtitle>
    </Card>
  </Flex>
);

OpensourceCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  projectYear: PropTypes.string.isRequired,
};

const fakeProject = {
  id: 1,
  name: 'Fake Project',
  description: 'Description',
  repositoryUrl: 'https://material-ui.com/components/material-icons/',
  projectUrl: 'https://material-ui.com/components/material-icons/',
  projectYear: '2020',
};

const Opensource = () => {

  return (
    <Container id="opensource" Background={Background}>
      <Header name="Opensource" icon="🤝" label="handshake"  />
      <Fade bottom key="TBC">
        <OpensourceCard {...fakeProject} key='TBCC' />
      </Fade>
    </Container>
  )
}

Opensource.defaultProps = {

}

Opensource.propTypes = {

}

export default Opensource
