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
import '../styles/customTimeline.css'

const { Container, Header } = Section;

// TODO Refactor: move content to CMS and run map function (use index for alternating props in .map)
// TODO Hook card color into colors export (currently hard coded)

const Background = () => (
  <div>
    <Triangle
      color="primaryLight"
      height={['10vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['30vh', '24vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="secondary"
      height={['30vh', '10vh']}
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
      <VerticalTimeline className="vertical-timeline-custom-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c5c6c6', color: `#000` }}
          contentArrowStyle={{ borderRight: '7px solid #c5c6c6' }}
          date={<ImageSubtitle bg="primary" color="text" y="bottom" x="left">July 2019 - present</ImageSubtitle>}
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
            Currently working as a Front-End Developer on Continuous Software’s flagship product for use in
            project management, aangine™, which is developed specifically for the management of project portfolios.
            Working within an Agile development environment utilising JavaScript based technologies
            including JavaScript (React, Redux, Node, NPM) as well as leveraging industry standard tools such
            as WebStorm, GitLab, Jira, Jenkins and Docker to name but a few.
          </p>
          <p>
            I also worked on a performance testing and application optimisation project carried out with the Saudi
            Commission for Tourism and National Heritage (SCTH), as part of their major development of a new eVisa
            platform, where tourist visa applications would be streamlined globally for the Kingdom.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c5c6c6', color: `#000` }}
          contentArrowStyle={{ borderRight: '7px solid #c5c6c6' }}
          date={<ImageSubtitle bg="primary" color="text" y="bottom" x="right">Jan 2019 - July 2019</ImageSubtitle>}
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
            Prior to my current role, I worked with SAP's Dublin UX Team developing user friendly and intuitive
            JavaScript based web applications, as well as VS Code extensions for use by other SAP teams. Working
            within an Agile development environment leveraging industry standard tools and collaborating with a diverse
            team of developers, designers, test, DevOps and product owners. From the first day involved in projects, for
            example the development of a web application for the storage of documentation with tools including React,
            Redux, GatsbyJS, Netlify and Sass.
          </p>
          <p>
            I also had the pleasure of working on an interesting prototyping project developing VSCode extensions for
            fellow developers within the company.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#c5c6c6', color: `#000` }}
          contentArrowStyle={{ borderRight: '7px solid #c5c6c6' }}
          date={<ImageSubtitle bg="primary" color="text" y="bottom" x="left">2017 - 2019</ImageSubtitle>}
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
            During my time at KPMG, I decided to undertake aHigher Diploma in Computing at TUD (previously DIT) in
            order to progress into the Software Development industry. This course covered the core fundamentals of Computer
            Science, with a strong focus OOP (Java, C#) and covering topics such as SOLID design principles, information systems,
            as well as web application and Android application development.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c5c6c6', color: `#000` }}
          contentArrowStyle={{ borderRight: '7px solid #c5c6c6' }}
          date={<ImageSubtitle bg="primary" color="text" y="bottom" x="right">Nov 2016 - Jan 2019</ImageSubtitle>}
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
            I spent two years in the interesting field of the Research and Development ('R&D') tax credit and
            relief scheme in Ireland. The R&D tax credit is a unique area of tax that requires understanding of science,
            technology, accounting, and taxation. The R&D tax credit is an incentive to encourage companies to carry out
            R&D activities and to attract multinationals to invest in Research, Development and Innovation ('R&D&I').
          </p>
          <p>
            My technical knowledge coupled with his willingness to diversify, provided the opportunity to work with,
            and be specifically trained by, expert professionals in the area of the R&D tax credit. He provided advisory
            to primarily software clients as well as other industry sectors, such as manufacturing and electronic engineering.
            I was lucky to work with a range of clients from multinational PLCs, LC, SMEs and start-up companies in Ireland.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c5c6c6', color: `#000` }}
          contentArrowStyle={{ borderRight: '7px solid #c5c6c6' }}
          date={<ImageSubtitle bg="primary" color="text" y="bottom" x="left">Nov 2012 - July 2016</ImageSubtitle>}
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
            In this role, my primary focus revolved around equipment troubleshooting and sustaining ownership of day-today
            operations with a focus on delivering best-in-class results for tool availability, cycle time,
            defect and parametric performance within a 24-hour manufacturing environment. Applying the concepts of
            Lean and Six Sigma was a key aspect to the role managing various projects, for example the ‘SAFIER
            Reduction Project’, which reduced chemical usage within the equipment toolset by 66%.
          </p>
          <p>
            I also managed a team of eight technicians, as well as being point of escalation for engineering issues
            and providing hands-on technical support, with a focus on safety, people, quality, velocity and
            cost. Critical to this role was using tools such as SPC and SQL to make informed and data driven
            decisions and present technical reports.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#c5c6c6', color: `#000` }}
          contentArrowStyle={{ borderRight: '7px solid #c5c6c6' }}
          date={<ImageSubtitle bg="primary" color="text" y="bottom" x="right">2011 - 2012</ImageSubtitle>}
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
            This MSc programme provided a broad understanding of modern electronics giving expertise in
            the design, simulation and construction of electronic systems. It also allowed for a flexible
            approach to studying electronics allowing me to tailor the MSc to fit my interests.
          </p>
          <p>
            My thesis project was an investigation and analysis of drive circuits for high-power, high-speed
            LEDs and LED arrays for use in visible light communication (VLC) technology.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#c5c6c6', color: `#000` }}
          contentArrowStyle={{ borderRight: '7px solid #c5c6c6' }}
          date={<ImageSubtitle bg="primary" color="text" y="bottom" x="left">2010 - 2011</ImageSubtitle>}
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
            This BEng programme provided the theoretical basis and design methods for communications, computers,
            programming, software engineering, control and other electronic and electrical energy systems. Practical and
            organisational skills were encouraged through project, design and laboratory work and through presentations and
            management studies.
          </p>
          <p>
            The topic for my thesis project was an investigation into the properties of incoherent optical code division multiple
            access (OCDMA) systems.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#c5c6c6', color: `#000` }}
          contentArrowStyle={{ borderRight: '7px solid #c5c6c6' }}
          date={<ImageSubtitle bg="primary" color="text" y="bottom" x="right">2007 - 2010</ImageSubtitle>}
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
            This three-year course served as the foundation for subsequent academic courses. It covered the core foundations
            of electrical and electronic engineering, and well as practical hands-on training with soldering and building devices
            a weekly task.
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
