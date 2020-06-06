import React from 'react';
import { Link, graphql } from 'gatsby';
import { Flex } from 'rebass/styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { Triangle } from '../components/Triangle';
import Section from '../components/Section';
import styled from 'styled-components';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

const { Container } = Section;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={["35vh", "50vh"]}
      width={["95vw", "60vw"]}
    />

    <Triangle
      color="secondary"
      height={["5vh", "10vh"]}
      width={["50vw", "35vw"]}
    />

    <Triangle
      color="primaryDark"
      height={["5vh", "15vh"]}
      width={["75vw", "100vw"]}
      invertX
    />

    <Triangle
      color="primary"
      height={["10vh", "5vh"]}
      width={["100vw", "100vw"]}
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

const StyledNav = styled.nav`
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

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
  box-shadow: inset 0 -2px 0 ${(props) => props.theme.colors.secondary};
  transition: background 0.1s cubic-bezier(.33,.66,.66,1);
  &:hover {
    background: ${(props) => props.theme.colors.secondary};
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

        <StyledNav>
          <StyledList>
            <li>
              {next && (
                <StyledLink to={next.fields.slug} rel="next">
                  <AiOutlineCaretLeft /> {next.frontmatter.title}
                </StyledLink>
              )}
            </li>
            <li>
              {previous && (
                <StyledLink to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.title} <AiOutlineCaretRight />
                </StyledLink>
              )}
            </li>
          </StyledList>
        </StyledNav>
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
