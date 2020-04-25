import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import Section from '../components/Section'
import { Triangle } from "../components/Triangle"

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '30vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="secondary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertY
      invertX
    />
  </div>
);

const Experience = () => {

  return (
    <Container id="experience" Background={Background}>
      <Header name="Experience" icon="💼" label="briefcase"  />
    </Container>
  )
}

Experience.defaultProps = {

}

Experience.propTypes = {

}

export default Experience
