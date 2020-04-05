import React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Section } from "react-scroll-section"

const Technologies = () => {

  return (
    <Section id="technologies">
      <div
        style={{
          height: '100vh',
          width: '600px',
          border: '5px solid #1C6EA4'
        }}
      >
        Technologies
      </div>
    </Section>
  )
}

Technologies.defaultProps = {

}

Technologies.propTypes = {

}

export default Technologies
