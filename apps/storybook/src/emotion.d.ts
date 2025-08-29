import '@emotion/react';
import type { Theme as IctinusTheme } from '@orfium/ictinus';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends IctinusTheme {}
}
