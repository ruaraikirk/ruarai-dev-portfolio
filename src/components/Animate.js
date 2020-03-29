import React from "react"
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

// TODO Not in use but could be looked at again

const StyledDiv = styled.div`
animation: animationFrames linear 8s;
animation-iteration-count: infinite;
transform-origin: 50% 50%;
-webkit-animation: animationFrames linear 8s;
-webkit-animation-iteration-count: infinite;
-webkit-transform-origin: 50% 50%;
-moz-animation: animationFrames linear 8s;
-moz-animation-iteration-count: infinite;
-moz-transform-origin: 50% 50%;
-o-animation: animationFrames linear 8s;
-o-animation-iteration-count: infinite;
-o-transform-origin: 50% 50%;
-ms-animation: animationFrames linear 8s;
-ms-animation-iteration-count: infinite;
-ms-transform-origin: 50% 50%;

:hover
{
    animation-play-state: paused;
}

@keyframes animationFrames{
  0% {
    transform:  translate(-800px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
  100% {
    transform:  translate(1500px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
}

@-moz-keyframes animationFrames{
  0% {
    -moz-transform:  translate(-800px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
  100% {
    -moz-transform:  translate(1500px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
}

@-webkit-keyframes animationFrames {
  0% {
    -webkit-transform:  translate(-800px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
  100% {
    -webkit-transform:  translate(1500px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
}

@-o-keyframes animationFrames {
  0% {
    -o-transform:  translate(-800px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
  100% {
    -o-transform:  translate(1500px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
}

@-ms-keyframes animationFrames {
  0% {
    -ms-transform:  translate(-800px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
  100% {
    -ms-transform:  translate(1500px,0px)  scaleX(1.50) scaleY(1.50) ;
  }
}
`;

const Animate = () => {
  const data = useStaticQuery(graphql`
    query {
      react: file(absolutePath: { regex: "/react.png/" }) {
        childImageSharp {
          fixed(height: 50, width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <StyledDiv><Image fixed={data.react.childImageSharp.fixed} /></StyledDiv>
  )
}

export default Animate
