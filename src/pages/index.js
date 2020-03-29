import React from "react"
import Helmet from "react-helmet"
import { withPrefix, Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import animateScrollTo from 'animated-scroll-to';
import MouseIcon from "../components/MouseIcon"
import HeroOverlay from "../components/HeroOverlay"
import Hero from "../components/Hero"
import Technologies from "../components/Technologies"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const scrollWindow = () => {
    const data = document.getElementById('to');
    if (data) {
      const windowScrollTop = window.scrollY || window.pageYOffset;
      const dataRect = data.getBoundingClientRect();
      animateScrollTo(dataRect.top + dataRect.height + windowScrollTop, {
        speed: 1000,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
      <Hero>
        <HeroOverlay />
        <span
          role="button"
          onClick={() => scrollWindow()}
          onKeyDown={() => scrollWindow()}
          tabIndex={0}
        >
        <MouseIcon onClick={scrollWindow} />
      </span>
      </Hero>
      <div id="to" />
      <Layout location={location} title={siteTitle}>
        <SEO title="Portfolio" />
        <Bio />
        <Technologies />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
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
      </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
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
`
