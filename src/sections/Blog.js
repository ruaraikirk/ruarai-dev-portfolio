import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Section from '../components/Section'
import { Triangle } from "../components/Triangle"

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={['15vh', '30vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
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

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
      {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
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
