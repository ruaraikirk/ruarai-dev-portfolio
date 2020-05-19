import preset from "@rebass/preset"

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
