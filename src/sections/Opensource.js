import React from 'react';
import PropTypes from 'prop-types';
import Section from '../components/Section';
import { Triangle } from '../components/Triangle';
import styled from 'styled-components';
import { Box, Flex, Text, Image } from 'rebass/styled-components';
import { CardContainer, Card } from '../components/Card';
import ImageSubtitle from '../components/ImageSubtitle';
import Fade from 'react-reveal/Fade';
import SocialLink from '../components/SocialLink';
import Hide from '../components/Hide';


const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={["10vh", "20vh"]}
      width={["100vw", "100vw"]}
    />

    <Triangle
      color="secondary"
      height={["25vh", "20vh"]}
      width={["70vw", "40vw"]}
      invertX
      invertY
    />

    <Triangle
      color="primaryLight"
      height={["30vh", "10vh"]}
      width={["100vw", "100vw"]}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';
const CARD_WIDTH = '400px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});
  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
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

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */
  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

const ProjectCard = styled(Card)`
  width: ${CARD_WIDTH};
  background-color: ${(props) => props.theme.colors.backgroundDark};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_WIDTH} - 50px);
    padding: 10px;
  }
`;

const OpensourceProject = ({ name, description, projectYear, repositoryUrl, projectUrl, type }) => (
  <ProjectCard p={0} >
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: "auto" }} color="text">
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage
          src="https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg"
          alt={name}
        />
        <ProjectTag>
          <Flex
            style={{
              float: "right",
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
          <ImageSubtitle bg="primary" color="text" y="bottom" x="right">
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="secondary" color="white" round>{projectYear}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </ProjectCard>
);

OpensourceProject.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
  projectYear: PropTypes.string.isRequired,
};

const fakeProject = {
  id: 1,
  name: 'Coming Soon',
  description: 'Getting involved in opensource stuff is good karma.',
  repositoryUrl: 'https://www.google.com/',
  projectUrl: 'https://www.google.com/',
  projectYear: '2020',
  type: 'Front-End'
};

const Opensource = () => {
  return (
    <Container id="opensource" Background={Background}>
      <Header name="Opensource" icon="🤝" label="handshake"  />
      <CardContainer minWidth="350px">
        <Fade bottom delay={200} key="TBC">
          <OpensourceProject {...fakeProject} key="TBCC" />
        </Fade>
      </CardContainer>
    </Container>
  )
}

export default Opensource
