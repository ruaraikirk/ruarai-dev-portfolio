import React, { useState } from "react"
import { Link } from 'gatsby'
import { createGlobalStyle,  ThemeProvider } from 'styled-components'
import { ScrollingProvider, Section } from 'react-scroll-section'
// import preset from '@rebass/preset'
// import useLocalState from "../utils/useLocalState"
import { GlobalStyle } from "../components/GlobalStyle";
import { lightTheme, darkTheme } from "../components/Themes"
import { useDarkMode } from "../utils/useDarkMode"
import HiddenBox from './HiddenBox'
import Hero from '../sections/Hero'
import Header from './Header'
import Footer from "./Footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  if(!mountedComponent) return <div/>
  return (
    <main>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <ScrollingProvider>
          <HiddenBox
            showIf={location.pathname === rootPath}
          >
            <Header checked={theme} toggleTheme={themeToggler}/>
            <Section id="home">
              <Hero />
            </Section>
          </HiddenBox>
          <HiddenBox showIf={location.pathname !== rootPath}><header>{header}</header></HiddenBox>
          <main>{children}</main>
          <Footer />
        </ScrollingProvider>
      </ThemeProvider>
    </main>
  )
}

export default Layout
