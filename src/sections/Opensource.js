import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Section } from "react-scroll-section"

const Opensource = () => {

  return (
    <Section id="opensource">
      <div
        style={{
          height: '100vh',
          width: '600px',
          border: '5px solid #1C6EA4'
        }}
      >
        Opensource
      </div>
    </Section>
  )
}

Opensource.defaultProps = {

}

Opensource.propTypes = {

}

export default Opensource
