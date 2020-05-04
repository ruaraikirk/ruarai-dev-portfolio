import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Image from 'gatsby-image'
import Section from '../components/Section'
import { Triangle } from "../components/Triangle"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarsIcon from '@material-ui/icons/Stars';
import ImageSubtitle from "../components/ImageSubtitle"

const { Container, Header } = Section;

// TODO Refactor: move content to CMS and run map function (use index for alternating props in .map)
// TODO Hook card color into colors export (currently hard coded)

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
  const data = useStaticQuery(graphql`
    query {
      continuous: file(absolutePath: { regex: "/continuous.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      sap: file(absolutePath: { regex: "/sap-logo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      kpmg: file(absolutePath: { regex: "/kpmg.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      intel: file(absolutePath: { regex: "/intel.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      tud: file(absolutePath: { regex: "/tud.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      edinburgh: file(absolutePath: { regex: "/edinburgh-uni.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      heriot: file(absolutePath: { regex: "/heriot-watt.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      dkit: file(absolutePath: { regex: "/dkit.png/" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 50) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container id="experience" Background={Background}>
      <Header name="Experience" icon="💼" label="briefcase"  />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: `${(props) => props.theme.colors.secondaryLight}`, color: '#000' }}
          contentArrowStyle={{ borderRight: `7px solid ${(props) => props.theme.colors.secondaryLight}` }}
          date={<ImageSubtitle bg="backgroundDark" color="white" y="bottom" x="left">July 2019 - present</ImageSubtitle>}
          icon={<Image
            fluid={data.continuous.childImageSharp.fluid}
            alt={data.continuous.childImageSharp.originalName}
            style={{
              minWidth: 40,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Dublin, Ireland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            eleifend consectetur dolor venenatis porttitor. Proin tortor odio,
            hendrerit in leo et, blandit pharetra nibh. Pellentesque pulvinar,
            arcu in pharetra aliquam, dolor enim laoreet quam, et tincidunt nibh
            nulla quis dui.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: `${(props) => props.theme.colors.secondaryLight}`, color: '#000' }}
          contentArrowStyle={{ borderRight: `7px solid ${(props) => props.theme.colors.secondaryLight}` }}
          date={<ImageSubtitle bg="backgroundDark" y="bottom" x="right">Jan 2019 - July 2019</ImageSubtitle>}
          icon={<Image
            fluid={data.sap.childImageSharp.fluid}
            alt={data.sap.childImageSharp.originalName}
            style={{
              minWidth: 40,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Dublin, Ireland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            eleifend consectetur dolor venenatis porttitor. Proin tortor odio,
            hendrerit in leo et, blandit pharetra nibh. Pellentesque pulvinar,
            arcu in pharetra aliquam, dolor enim laoreet quam, et tincidunt nibh
            nulla quis dui.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: `${(props) => props.theme.colors.secondaryLight}`, color: '#000' }}
          contentArrowStyle={{ borderRight: `7px solid ${(props) => props.theme.colors.secondaryLight}` }}
          date={<ImageSubtitle bg="backgroundDark" y="bottom" x="left">2017 - 2019</ImageSubtitle>}
          icon={<Image
            fluid={data.tud.childImageSharp.fluid}
            alt={data.tud.childImageSharp.originalName}
            style={{
              minWidth: 40,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />}
        >
          <h3 className="vertical-timeline-element-title">HDip Computing (Software Development)</h3>
          <h4 className="vertical-timeline-element-subtitle">Dublin, Ireland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            eleifend consectetur dolor venenatis porttitor. Proin tortor odio,
            hendrerit in leo et, blandit pharetra nibh. Pellentesque pulvinar,
            arcu in pharetra aliquam, dolor enim laoreet quam, et tincidunt nibh
            nulla quis dui.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: `${(props) => props.theme.colors.secondaryLight}`, color: '#000' }}
          contentArrowStyle={{ borderRight: `7px solid ${(props) => props.theme.colors.secondaryLight}` }}
          date={<ImageSubtitle bg="backgroundDark" y="bottom" x="right">Nov 2016 - Jan 2018</ImageSubtitle>}
          icon={<Image
            fluid={data.kpmg.childImageSharp.fluid}
            alt={data.kpmg.childImageSharp.originalName}
            style={{
              minWidth: 40,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />}
        >
          <h3 className="vertical-timeline-element-title">Consultant Engineer (Software & Electronics)</h3>
          <h4 className="vertical-timeline-element-subtitle">Dublin, Ireland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            eleifend consectetur dolor venenatis porttitor. Proin tortor odio,
            hendrerit in leo et, blandit pharetra nibh. Pellentesque pulvinar,
            arcu in pharetra aliquam, dolor enim laoreet quam, et tincidunt nibh
            nulla quis dui.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: `${(props) => props.theme.colors.secondaryLight}`, color: '#000' }}
          contentArrowStyle={{ borderRight: `7px solid ${(props) => props.theme.colors.secondaryLight}` }}
          date={<ImageSubtitle bg="backgroundDark" y="bottom" x="left">Nov 2012 - July 2016</ImageSubtitle>}
          icon={<Image
            fluid={data.intel.childImageSharp.fluid}
            alt={data.intel.childImageSharp.originalName}
            style={{
              minWidth: 40,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />}
        >
          <h3 className="vertical-timeline-element-title">Process Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Leixlip, Ireland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            eleifend consectetur dolor venenatis porttitor. Proin tortor odio,
            hendrerit in leo et, blandit pharetra nibh. Pellentesque pulvinar,
            arcu in pharetra aliquam, dolor enim laoreet quam, et tincidunt nibh
            nulla quis dui.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: `${(props) => props.theme.colors.secondaryLight}`, color: '#000' }}
          contentArrowStyle={{ borderRight: `7px solid ${(props) => props.theme.colors.secondaryLight}` }}
          date={<ImageSubtitle bg="backgroundDark" y="bottom" x="right">2011 - 2012</ImageSubtitle>}
          icon={<Image
            fluid={data.edinburgh.childImageSharp.fluid}
            alt={data.edinburgh.childImageSharp.originalName}
            style={{
              minWidth: 40,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />}
        >
          <h3 className="vertical-timeline-element-title">MSc Electronics</h3>
          <h4 className="vertical-timeline-element-subtitle">Edinburgh, UK</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            eleifend consectetur dolor venenatis porttitor. Proin tortor odio,
            hendrerit in leo et, blandit pharetra nibh. Pellentesque pulvinar,
            arcu in pharetra aliquam, dolor enim laoreet quam, et tincidunt nibh
            nulla quis dui.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: `${(props) => props.theme.colors.secondaryLight}`, color: '#000' }}
          contentArrowStyle={{ borderRight: `7px solid ${(props) => props.theme.colors.secondaryLight}` }}
          date={<ImageSubtitle bg="backgroundDark" y="bottom" x="left">2010 - 2011</ImageSubtitle>}
          icon={<Image
            fluid={data.heriot.childImageSharp.fluid}
            alt={data.heriot.childImageSharp.originalName}
            style={{
              minWidth: 40,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />}
        >
          <h3 className="vertical-timeline-element-title">BEng Electrical & Electronic Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">Edinburgh, UK</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            eleifend consectetur dolor venenatis porttitor. Proin tortor odio,
            hendrerit in leo et, blandit pharetra nibh. Pellentesque pulvinar,
            arcu in pharetra aliquam, dolor enim laoreet quam, et tincidunt nibh
            nulla quis dui.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: `${(props) => props.theme.colors.secondaryLight}`, color: '#000' }}
          contentArrowStyle={{ borderRight: `7px solid ${(props) => props.theme.colors.secondaryLight}` }}
          date={<ImageSubtitle bg="backgroundDark" y="bottom" x="right">2007 - 2010</ImageSubtitle>}
          icon={<Image
            fluid={data.dkit.childImageSharp.fluid}
            alt={data.dkit.childImageSharp.originalName}
            style={{
              minWidth: 40,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />}
        >
          <h3 className="vertical-timeline-element-title">BEng Electrical & Electronic Systems</h3>
          <h4 className="vertical-timeline-element-subtitle">Dundalk, Ireland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            eleifend consectetur dolor venenatis porttitor. Proin tortor odio,
            hendrerit in leo et, blandit pharetra nibh. Pellentesque pulvinar,
            arcu in pharetra aliquam, dolor enim laoreet quam, et tincidunt nibh
            nulla quis dui.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarsIcon fontSize="large" />}
        />
      </VerticalTimeline>
    </Container>
  )
}

Experience.defaultProps = {

}

Experience.propTypes = {

}

export default Experience
