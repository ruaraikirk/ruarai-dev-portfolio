import preset from "@rebass/preset"

const colorsLight = {
  background: '#FFFFFF',
  backgroundDark: '#d3d3d3',

  text: '#000000',

  primary: '#bdd5ea',
  primaryLight: '#f7f7ff',
  primaryDark: '#577399',

  secondary: '#fe5f55',
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

export const lightTheme = {
  ...preset,
  colors: colorsLight,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
  backgroundColor: 'transparent'
};

export const darkTheme = {
  ...preset,
  colors: colorsDark,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
  backgroundColor: '#121212'
};
