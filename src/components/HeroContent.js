import React from "react"
import { Icon } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import styled, { keyframes }  from 'styled-components';
import Fade from "react-reveal/Fade"
import { Box, Flex } from "rebass/styled-components"

const TypewriterTextLarge = keyframes`
   from{width: 0;}
   to{width: 400px;}
`;

const TypewriterTextSmall = keyframes`
  from{width: 0;}
  to{width: 290px;}
`;

const TypewriterCursor = keyframes`
  from{border-right-color: rgba(0,255,0,.75);}
  to{border-right-color: transparent;}
`;

const Typewriter = styled.div`
  border-right: solid 3px rgba(0,255,0,.75);
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Source Code Pro', monospace;
  color: #000000;
  margin: 0 auto;
  font-size: 28px;
  @media screen and (min-width: 601px) {
    font-size: 28px;
    animation: ${TypewriterTextLarge} 3.5s steps(29,end) 1s 1 normal both,
    ${TypewriterCursor} 600ms steps(29,end) infinite;
  }
  @media screen and (max-width: 600px) {
    font-size: 21px;
    animation: ${TypewriterTextSmall} 3s steps(29,end) 1s 1 normal both,
    ${TypewriterCursor} 600ms steps(29,end) infinite;
  }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer
`;

const HeroContent = () => {
  return (
    <div>
      <Flex>
          <Box width={420}>
            <Typewriter>Hello World! I'm Ruaraí.</Typewriter>
          </Box>
      </Flex>
      <Flex justifyContent='space-around'>
        <Fade right>
          <Box mx={[2, 3]} fontSize={[4, 5]} key="header_github">
            <StyledIcon>
              <GitHubIcon fontSize="large" onClick={() => window.open('https://github.com/ruaraikirk')}/>
            </StyledIcon>
          </Box>
          <Box mx={[2, 3]} fontSize={[4, 5]} key="header_linkedin">
            <StyledIcon>
              <LinkedInIcon fontSize="large" onClick={() => window.open('https://linkedin.com/in/ruaraikirk')}/>
            </StyledIcon>
          </Box>
          <Box mx={[2, 3]} fontSize={[4, 5]} key="header_mail">
            <StyledIcon>
              <MailOutlineIcon fontSize="large" onClick={() => window.open('mailto: ruaraikirk@gmail.com')}/>
            </StyledIcon>
          </Box>
          <Box mx={[2, 3]} fontSize={[4, 5]} key="header_instagram">
            <StyledIcon>
              <InstagramIcon fontSize="large" onClick={() => window.open('https://www.instagram.com/ruaraikirk/?hl=en')}/>
            </StyledIcon>
          </Box>
        </Fade>
      </Flex>
    </div>
  )
}

export default HeroContent
