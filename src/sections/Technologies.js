import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Section from '../components/Section'
import { Triangle } from '../components/Triangle'
import TechnologiesGrid from "../components/TechnologiesGrid"

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Technologies = () => {

  return (
    <Container id="technologies" Background={Background}>
      <Header name="Technologies" icon="🛠" label="tools"  />
      <TechnologiesGrid />
    </Container>
  )
}

Technologies.defaultProps = {

}

Technologies.propTypes = {

}

export default Technologies
