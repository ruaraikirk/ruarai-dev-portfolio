import React from "react"
import { graphql } from "gatsby"
import Bio from "../sections/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Blog from "../sections/Blog"
import Projects from "../sections/Projects"
import Opensource from "../sections/Opensource"
import Experience from "../sections/Experience"
import Technologies from "../sections/Technologies"
// import { ThemeProvider } from "../context/ThemeContext"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <Bio />
      <Technologies />
      <Projects />
      <Opensource />
      <Experience />
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
