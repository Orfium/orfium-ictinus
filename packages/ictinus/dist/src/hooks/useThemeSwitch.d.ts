import * as React from 'react';
declare const useThemeSwitch: () => {
    isDark: boolean;
    toggle: () => void;
};
declare const ThemeSwitchProvider: React.FCC<{
    [key: string]: unknown;
}>;
export { ThemeSwitchProvider, useThemeSwitch };
