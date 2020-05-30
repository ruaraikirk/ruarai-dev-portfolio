import React from "react"
import { Link, graphql } from "gatsby"
import { Flex } from 'rebass/styled-components';
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Triangle } from '../components/Triangle'
import Section from '../components/Section'
import styled from "styled-components"
import { Icon } from "@material-ui/core"


const { Container } = Section;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '50vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['5vh', '10vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['5vh', '15vh']}
      width={['75vw', '100vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['10vh', '5vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const MEDIA_QUERY_SMALL = '@media (max-width: 450px)';

const StyledArticle = styled.section`
  color: ${(props) => props.theme.colors.text};
  text-align: justify;
  img {
    display:block;
    margin:auto;
  }
`;

const StyledSection = styled.section`
  // color: ${(props) => props.theme.colors.text};
  text-align: justify;
  img {
    display: block;
    margin: auto;
  }
  ${MEDIA_QUERY_SMALL} {
    img {
      max-width: 300px
    }
  }
`;

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container id={siteTitle} Background={Background}>
        <StyledArticle>
          <Flex
            flexDirection="column"
            justifyContent="center"
            mx={[2, 7]}
            mt={[5, 2]}
          >
            <header>
              <h1>
                {post.frontmatter.title}
              </h1>
              <p>
                {post.frontmatter.date}
              </p>
            </header>
            <StyledSection dangerouslySetInnerHTML={{ __html: post.html }} />
          </Flex>
          <hr />
        </StyledArticle>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </Layout>
  )
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
