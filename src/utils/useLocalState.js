import { useState } from "react"

/**
 * Custom hook which uses local state to persist the theme value (boolean).
 * On initial load, getItem will return null, so initial state is set to
 * false (i.e. light theme).
 * @type {boolean}
 */

const useLocalState = () => {
  const windowGlobal = typeof window !== 'undefined' && window // https://github.com/gatsbyjs/gatsby/issues/309#issuecomment-302043875
  let stateValue;
  if (typeof window !== 'undefined') {
    stateValue = windowGlobal.localStorage.getItem('darkTheme') === null
      ? false : windowGlobal.localStorage.getItem('darkTheme') === 'true';
  }

  const [local, setState] = useState(stateValue);
  const setLocal = (newThemeState) => {
    if (typeof window !== 'undefined') {
      windowGlobal.localStorage.setItem('darkTheme', newThemeState)
    }
    setState(newThemeState);
  }

  if (!stateValue) {
    if (typeof document !== `undefined`) document.body.style.backgroundColor = "transparent";
  } else {
    if (typeof document !== `undefined`) document.body.style.backgroundColor = "#121212";
  }

  return [local, setLocal];
}

export default useLocalState;
