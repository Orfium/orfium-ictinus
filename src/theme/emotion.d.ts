import '@emotion/react';
import { Theme as IctinusTheme } from './index';

declare module '@emotion/react' {
  export interface Theme extends IctinusTheme {}
}
