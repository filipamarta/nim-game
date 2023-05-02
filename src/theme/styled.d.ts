import {} from 'styled-components';
import ThemeConfig from './index';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeConfig {} // extends the global DefaultTheme with our ThemeType.
}
