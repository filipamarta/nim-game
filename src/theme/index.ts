const SCREENS = {
  xs: '576px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1400px',
};

const FONT_SIZES = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '2rem',
  xl: '2.5rem',
};

const BORDER_WIDTHS = {
  '1': '1px solid',
  '2': '2px solid',
};

const BORDER_RADIUS = {
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '20px',
};

const Z_INDEXES = {
  xs: '1',
  md: '2',
};

const COLORS = {
  neutral10: '#ffffff',
  neutral40: '#e9e9e9',
  neutral60: '#c5c1c1',
  neutral80: '#4e4949',
  neutral100: '#2b2a2a',
  red20: '#fdf2d6',
  red30: '#FBE6B1',
  red40: '#F9CFC8',
  red50: '#e74326',
  red80: '#9a6c29',
  red90: '#714a11',
  green50: '#0c8436',
  green80: '#576142',
  green100: '#353e22',
  human: '#0c8436',
  computer: '#0d26cd',
};

const up = (key: keyof typeof SCREENS): string => {
  return `@media (min-width: ${SCREENS[key]})`;
};

const baseTheme = {
  colors: COLORS,
  radii: BORDER_RADIUS,
  borderWidths: BORDER_WIDTHS,
  fontsSizes: FONT_SIZES,
  screens: SCREENS,
  zIndex: Z_INDEXES,
  up,
};

export type ThemeConfig = typeof baseTheme;

export const theme: ThemeConfig = {
  ...baseTheme,
};
