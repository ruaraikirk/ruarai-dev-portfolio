import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Section from '../components/Section'
import { Triangle } from '../components/Triangle'

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const Projects = () => {

  return (
    <Container id="projects" Background={Background}>
      <Header name="Projects" icon="💻" label="notebook"  />
    </Container>
  )
}

Projects.defaultProps = {

}

Projects.propTypes = {

}

export default Projects