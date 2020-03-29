import React from "react"
import '../styles/bubbles.css'

const Technologies = () => {
  return (
    <div>
      <h2
        style={{textAlign: `right`}}
      >
        Technologies
      </h2>
      <p>
        Experienced in front-end Javascript based technologies, such as React,
        Redux and libraries including Material-UI and Ant Design. However, I also
        have a keen interest in broadening my skill set and have worked on tasks
        related to DevOps, back-end and serverless in both professional and personal
        projects. Some of the technologies I am familiar with include:
      </p>
      <div className="bubble-wrap">
        <div className="bubbles" />
      </div>
    </div>
  )
}

export default Technologies
