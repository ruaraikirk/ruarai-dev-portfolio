import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Section from '../components/Section'
import { Triangle } from "../components/Triangle"

const { Container, Header } = Section;

const Background = () => (
  <div>
    <Triangle
      color="primaryDark"
      height={['15vh', '30vh']}
      width={['100vw', '100vw']}
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Opensource = () => {

  return (
    <Container id="opensource" Background={Background}>
      <Header name="Opensource" icon="🤝" label="handshake"  />
    </Container>
  )
}

Opensource.defaultProps = {

}

Opensource.propTypes = {

}

export default Opensource
