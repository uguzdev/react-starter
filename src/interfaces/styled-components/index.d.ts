// #region Global Imports
import 'styled-components';
// #endregion Global Imports

type ScoutiumColors = 'Green' | 'Red';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<ScoutiumColors, string>;
  }
}
