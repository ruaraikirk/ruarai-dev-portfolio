import React from "react"
import { Link, graphql } from "gatsby"
import animateScrollTo from 'animated-scroll-to';
import { SectionLink } from 'react-scroll-section'; // TODO review this library and https://www.gatsbyjs.org/starters/EmaSuriano/gatsby-starter-mate/
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LazyHero from 'react-lazy-hero';
import MouseIcon from "../components/MouseIcon"
import HeroBannerText from "../components/HeroBannerText"

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
    <LazyHero
      imageSrc="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2853&q=80"
      minHeight="100vh"
      parallaxOffset={100}
      color="#D3D3D3"
      transitionDuration={2500}
    >
      <HeroBannerText />
      <span
        onClick={() => scrollWindow()}
      >
        <MouseIcon onClick={scrollWindow} />
      </span>
    </LazyHero>
    <div id="to" />
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <Bio/>
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
