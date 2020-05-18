import React, { useState } from "react"
import { Link } from 'gatsby'
import { createGlobalStyle,  ThemeProvider } from 'styled-components'
import { ScrollingProvider, Section } from 'react-scroll-section'
import preset from '@rebass/preset'
import useLocalState from "../utils/useLocalState"
import HiddenBox from './HiddenBox'
import Hero from '../sections/Hero'
import Header from './Header'
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }
  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    font-display: swap;
    font-display: fallback;
    overflow-x: hidden;
  }
`;

const colorsLight = {
  background: '#FFFFFF',
  backgroundDark: '#f2eaec',

  text: '#000000',

  primary: '#50b6bb',
  primaryLight: '#0ce5e1',
  primaryDark: '#45969b',

  secondary: '#ff0340',
};

const colorsDark = {
  background: '#121212',
  backgroundDark: '#363537',

  text: '#FFFFFF',

  primary: '#5a189a',
  primaryLight: '#7b2cbf',
  primaryDark: '#3c096c',

  secondary: '#03dac5',
};

const themeLight = {
  ...preset,
  colors: colorsLight,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

const themeDark = {
  ...preset,
  colors: colorsDark,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  const [theme, setTheme] = useLocalState();

  const toggleTheme = () => {
    setTheme(!theme)
  }

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
  return (
    <main>
      <GlobalStyle />
      <ThemeProvider theme={theme ? themeDark : themeLight}>
        <ScrollingProvider>
          <HiddenBox
            showIf={location.pathname === rootPath}
          >
            <Header checked={theme} toggleTheme={toggleTheme}/>
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
