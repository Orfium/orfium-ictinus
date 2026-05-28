import '@emotion/react';
import type { Theme as IctinusTheme } from './types';

declare module '@emotion/react' {
  export interface Theme extends IctinusTheme {}
}
