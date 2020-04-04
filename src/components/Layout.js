import React  from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from 'styled-components';
import HiddenBox from "./HiddenBox"
import Hero from "../sections/Hero"

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

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

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
      <HiddenBox
        showIf={location.pathname === rootPath}
      >
        <Hero />
      </HiddenBox>
      <div id="to" />
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </main>
  )
}

export default Layout
