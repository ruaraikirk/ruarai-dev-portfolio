import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Section from '../components/Section';
import { Triangle } from '../components/Triangle';
import { Text, Flex, Box, Heading } from 'rebass/styled-components';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Card } from '../components/Card';
import SocialLink from '../components/SocialLink';
import ImageSubtitle from '../components/ImageSubtitle';

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="primary"
      height={["15vh", "10vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color="secondary"
      height={["25vh", "20vh"]}
      width={["70vw", "40vw"]}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["30vh", "10vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
);

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-color: ${(props) => props.theme.colors.text};
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;

const Project = ({
                   title,
                   description,
                   projectUrl,
                   repositoryUrl,
                   year,
                   fluid,
                   slug
                 }) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    style={{
      height: "100%",
      marginBottom: "1rem"
    }}
  >
    <ProjectCard pb={4}>
      <EllipsisHeading m={3} p={1} color="text">
        {title}
      </EllipsisHeading>
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
      <Link style={{ boxShadow: `none` }} to={slug}>
        <ProjectImage
          fluid={fluid}
          alt={title}
        />
        <Text m={3} color="text">
          {description}
        </Text>
      </Link>
      <ImageSubtitle bg="primary" color="text" x="right" y="bottom">
        {`${year}`}
      </ImageSubtitle>
    </ProjectCard>
  </Flex>
);

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(\\/content\\/projects)/.*\\\\.md$/"}}
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              year
              description
              projectUrl
              repositoryUrl
              type
              featuredImage {
                childImageSharp {
                  fluid(quality: 100) {
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
  const projectPosts = data.allMarkdownRemark.edges

  return (
    <Container id="projects" Background={Background}>
      <Header name="Projects" icon="💻" label="notebook"  />
        {projectPosts.map(({ node }) => {
          const {
            id,
            fields: {
              slug
            },
            frontmatter: {
              title,
              year,
              description,
              projectUrl,
              repositoryUrl,
              featuredImage: {
                childImageSharp: {
                  fluid
                }
              }
            }
          } = node;
          const meta = {
            title,
            description,
            projectUrl,
            repositoryUrl,
            year,
            fluid,
            slug
          };
          return (
            <Fade bottom delay={200} key={`project_${id}`}>
                <Project {...meta} />
            </Fade>
          )
        })}
    </Container>
  )
}

export default Projects
