import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';
import { ScrollingProvider, Section } from 'react-scroll-section';
import { GlobalStyle } from '../components/GlobalStyle';
import { lightTheme, darkTheme } from '../components/Themes';
import HiddenBox from './HiddenBox';
import Hero from '../sections/Hero';
import Header from './Header';
import Footer from './Footer';
import Headroom from 'react-headroom';
import { ThemeContext } from '../context/ThemeContext';
import { MdHome } from 'react-icons/md';
import { IconContext } from 'react-icons';

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background-color: ${(props) => props.theme.colors.backgroundDark}f2;
  }
  position: absolute;
  width: 100%;
  color: ${(props) => props.theme.colors.text};
`;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  const [theme, themeToggler, mountedComponent] = useContext(ThemeContext);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (location?.pathname !== rootPath) {
    header = (
      <IconContext.Provider value={{ size: "2.5rem" }}>
        <HeaderContainer>
            <Flex
              justifyContent="flex-end"
            >
              <Box
                px={[2, 1]}
                py={[4, 2]}
                sx={{
                  color: 'text',
                }}
              >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                <Flex
                  justifyItems="space-between"
                  alignItems="center"
                  mr={4}
                >
                  <MdHome />
                  <h3>
                    &nbsp;{title}
                  </h3>
                </Flex>
              </Link>
              </Box>
            </Flex>
        </HeaderContainer>
      </IconContext.Provider>
    )
  }

  if(!mountedComponent) return <div/>

  return (
    <main>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <ScrollingProvider>
          <HiddenBox
            showIf={location?.pathname === rootPath}
          >
            <Header checked={theme} toggleTheme={themeToggler}/>
            <Section id="home">
              <Hero />
            </Section>
          </HiddenBox>
          <HiddenBox showIf={location?.pathname !== rootPath}><header>{header}</header></HiddenBox>
          <main>{children}</main>
          <Footer />
        </ScrollingProvider>
      </ThemeProvider>
    </main>
  )
}

export default Layout
