import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"

// https://github.com/gatsbyjs/gatsby/issues/22552#issuecomment-603514399
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
