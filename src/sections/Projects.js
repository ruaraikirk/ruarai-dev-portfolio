import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Section } from "react-scroll-section"
import Layout from "../components/Layout"

const Projects = () => {

  return (
    <Section id="projects">
      <div
        style={{
          height: '100vh',
          width: '600px',
          border: '5px solid #1C6EA4'
        }}
      >
        Projects
      </div>
    </Section>
  )
}

Projects.defaultProps = {

}

Projects.propTypes = {

}

export default Projects
