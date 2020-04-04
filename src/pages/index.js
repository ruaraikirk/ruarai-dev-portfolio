import React from "react"
import { graphql } from "gatsby"
import Bio from "../sections/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../sections/Blog"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <Bio />
      <Blog />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
