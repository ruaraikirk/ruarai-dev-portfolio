import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Section from '../components/Section'
import { Triangle } from '../components/Triangle'
import { Image, Text, Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { CardContainer, Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
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

// TODO Maybe need to change to Gatsby Image
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
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_WIDTH} - 50px);
    padding: 10px;
  }
`;

const Project = ({
                   name,
                   description,
                   projectUrl,
                   repositoryUrl,
                   type,
                   projectYear,
                   logo,
                 }) => (
  <ProjectCard p={0} >
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }} color="text">
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src="https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg" alt="alt" />
        <ProjectTag>
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
          <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{projectYear}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </ProjectCard>
);

const fakeProject = {
  id: 1,
  name: 'Fake Project',
  description: 'Description',
  repositoryUrl: 'https://material-ui.com/components/material-icons/',
  projectUrl: 'https://material-ui.com/components/material-icons/',
  projectYear: '2020',
  type: 'Web'
};

const Projects = () => {

  return (
    <Container id="projects" Background={Background}>
      <Header name="Projects" icon="💻" label="notebook"  />

      <CardContainer minWidth="350px">
        <Fade bottom delay={200} key={fakeProject.id}>
          <Project {...fakeProject} />
        </Fade>
        <Fade bottom delay={200} key={fakeProject.id}>
          <Project {...fakeProject} />
        </Fade>
        <Fade bottom delay={200} key={fakeProject.id}>
          <Project {...fakeProject} />
        </Fade>
      </CardContainer>

      {/*<StaticQuery*/}
      {/*  query={graphql`*/}
      {/*  query ProjectsQuery {*/}
      {/*    contentfulAbout {*/}
      {/*      projects {*/}
      {/*        id*/}
      {/*        name*/}
      {/*        description*/}
      {/*        projectUrl*/}
      {/*        repositoryUrl*/}
      {/*        publishedDate(formatString: "YYYY")*/}
      {/*        type*/}
      {/*        logo {*/}
      {/*          title*/}
      {/*          image: resize(width: 200, quality: 100) {*/}
      {/*            src*/}
      {/*          }*/}
      {/*        }*/}
      {/*      }*/}
      {/*    }*/}
      {/*  }*/}
      {/*`}*/}
      {/*  render={({ contentfulAbout }) => (*/}
      {/*    <CardContainer minWidth="350px">*/}
      {/*      {contentfulAbout.projects.map((p, i) => (*/}
      {/*        <Fade bottom delay={i * 200} key={p.id}>*/}
      {/*          <Project {...p} />*/}
      {/*        </Fade>*/}
      {/*      ))}*/}
      {/*    </CardContainer>*/}
      {/*  )}*/}
      {/*/>*/}
    </Container>
  )
}

Projects.defaultProps = {

}

Projects.propTypes = {

}

export default Projects
