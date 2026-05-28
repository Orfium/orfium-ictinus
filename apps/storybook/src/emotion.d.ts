import '@emotion/react';
import type { Theme as IctinusTheme } from '@orfium/ictinus';

declare module '@emotion/react' {
  export interface Theme extends IctinusTheme {}
}
