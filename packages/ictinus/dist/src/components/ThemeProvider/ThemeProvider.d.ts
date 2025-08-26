import { ThemeConfig } from '../../theme/types';
import { DeepPartial } from '../../utils/types';
import * as React from 'react';
export type ThemeProviderProps = {
    /** Theme properties to override or pass theming down to library */
    theme?: DeepPartial<ThemeConfig>;
};
declare const ThemeProvider: React.FCC<ThemeProviderProps>;
export default ThemeProvider;
