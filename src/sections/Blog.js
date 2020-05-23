import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Heading, Text, Flex, Box } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { CardContainer, Card } from '../components/Card';
import ImageSubtitle from '../components/ImageSubtitle';
import Section from '../components/Section'
import { Triangle } from "../components/Triangle"

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={['10vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="primary"
      height={['30vh', '15vh']}
      width={['70vw', '40vw']}
      invertX
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['15vh', '5vh']}
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

const BlogCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;

const Post = ({ title, description, date }) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    style={{ height: '100%' }}
  >
  <BlogCard pb={4}>
    <EllipsisHeading m={3} p={1} color="text">
      {title}
    </EllipsisHeading>
    <CoverImage src="https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg" height="200px" alt={title} />
    <Text m={3} color="text">
      {description}
    </Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${date} - ${Math.ceil(3)} min`}
    </ImageSubtitle>
  </BlogCard>
  </Flex>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(\\/content\\/blog)/.*\\\\.md$/"}}
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges

  return (
    <Container id="blog" Background={Background}>
      <Header name="Blog" icon="📝" label="memo"  />
      <CardContainer minWidth="350px">
      {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const description = node.frontmatter.description || node.excerpt;
          const date = node.frontmatter.date;
          const meta = {title, description, date};
          return (
            <Fade bottom key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <Post {...meta} key={node.fields.slug} />
              </Link>
            </Fade>
          )
        })}
      </CardContainer>
    </Container>
  )
}

Blog.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Blog.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default Blog
