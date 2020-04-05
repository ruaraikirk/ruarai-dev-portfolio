import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Section } from "react-scroll-section"
import Layout from "../components/Layout"

const Experience = () => {

  return (
    <Section id="experience">
      <div
        style={{
          height: '100vh',
          width: '600px',
          border: '5px solid #1C6EA4'
        }}
      >
        Experience
      </div>
    </Section>
  )
}

Experience.defaultProps = {

}

Experience.propTypes = {

}

export default Experience
