import * as React from 'react';
import { ReactFCC } from 'utils/types';

const defaultContextData = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useThemeSwitch = () => {
  return React.useContext(ThemeContext);
};

const ThemeSwitchProvider: ReactFCC<{ [key: string]: unknown }> = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    dark: false,
  });

  return (
    <ThemeContext.Provider
      value={{
        dark: themeState.dark,
        toggle: () => {
          setThemeState((themeState: any) => ({ dark: !themeState.dark }));
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeSwitchProvider, useThemeSwitch };
