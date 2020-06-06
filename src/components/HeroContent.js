import React, { useContext } from 'react';
import { Icon } from '@material-ui/core';
import styled, { keyframes }  from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import { IconContext } from 'react-icons';
import { GrGithub } from 'react-icons/gr';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

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
  color: ${(props) => props.theme.colors.text};
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
  cursor: pointer;
  // color: ${(props) => props.theme.colors.text};
`;

const HeroContent = () => {
  const [theme] = useContext(ThemeContext);
  const iconColor = theme === "light" ? "#000000" : "#FFFFFF";
  return (
    <IconContext.Provider value={{ color: iconColor, size: '2.5rem' }}>
    <Flex alignSelf="center" flexDirection="column" width={[300, 410]} mx={-2}>
      <Box width={1}>
        <Typewriter>Hello World! I'm Ruaraí.</Typewriter>
      </Box>
      <Flex justifyContent="space-between">
        <Fade right>
          <Box key="header_github">
            <StyledIcon>
              <GrGithub onClick={() => window.open("https://github.com/ruaraikirk")}/>
            </StyledIcon>
          </Box>
          <Box key="header_linkedin">
            <StyledIcon>
              <FaLinkedin onClick={() => window.open("https://linkedin.com/in/ruaraikirk")}/>
            </StyledIcon>
          </Box>
          <Box key="header_mail">
            <StyledIcon>
              <FiMail onClick={() => window.open("mailto: ruaraikirk@gmail.com")}/>
            </StyledIcon>
          </Box>
          <Box key="header_instagram">
            <StyledIcon>
              <FaInstagram onClick={() => window.open("https://www.instagram.com/ruaraikirk/?hl=en")}/>
            </StyledIcon>
          </Box>
        </Fade>
      </Flex>
    </Flex>
    </IconContext.Provider>
  )
}

export default HeroContent
