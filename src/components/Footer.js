import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby"
import { Text, Box, Link, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import { Icon } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media (max-width: 400px) {
    flex-direction: column-reverse;
    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.text};
  & a {
    color: ${(props) => props.theme.colors.text};
    transition: color ease 0.5s;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const StyledIcon = styled(Icon)`
  color: ${(props) => props.theme.colors.text};
  cursor: pointer
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata
  return (
    <Box p={[2, 3]} backgroundColor="primaryDark" as="footer">
      <FooterContainer>
        <Fade left>
          <TextFooter fontSize={[2, 3]}>
            <span>{`${author} Portfolio © ${new Date().getFullYear()} - Powered by `}</span>
            <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
            <span> and </span>
            <Link href="https://www.netlify.com/" mr={1}>
              Netlify
            </Link>
            <span role="img" aria-label="heart">❤️</span>
          </TextFooter>
        </Fade>
        <Flex>
          <Fade right>
            <Box mx={[2, 3]} fontSize={[4, 5]} key="footer_github">
              <StyledIcon>
                <GitHubIcon fontSize="large" onClick={() => window.open('https://github.com/ruaraikirk')}/>
              </StyledIcon>
            </Box>
            <Box mx={[2, 3]} fontSize={[4, 5]} key="footer_linkedin">
              <StyledIcon>
                <LinkedInIcon fontSize="large" onClick={() => window.open('https://linkedin.com/in/ruaraikirk')}/>
              </StyledIcon>
            </Box>
            <Box mx={[2, 3]} fontSize={[4, 5]} key="footer_mail">
              <StyledIcon>
                <MailOutlineIcon fontSize="large" onClick={() => window.open('mailto: ruaraikirk@gmail.com')}/>
              </StyledIcon>
            </Box>
            <Box mx={[2, 3]} fontSize={[4, 5]} key="footer_instagram">
              <StyledIcon>
                <InstagramIcon fontSize="large" onClick={() => window.open('https://www.instagram.com/ruaraikirk/?hl=en')}/>
              </StyledIcon>
            </Box>
          </Fade>
        </Flex>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
