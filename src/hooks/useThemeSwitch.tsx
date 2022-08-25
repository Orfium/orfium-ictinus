import * as React from 'react';

const defaultContextData = {
  isDark: false,
  toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);
const useThemeSwitch = () => {
  return React.useContext(ThemeContext);
};

const ThemeSwitchProvider: React.FC<{ [key: string]: unknown }> = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    isDark: false,
  });

  return (
    <ThemeContext.Provider
      value={{
        isDark: themeState.isDark,
        toggle: () => {
          setThemeState((themeState: any) => ({ isDark: !themeState.isDark }));
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeSwitchProvider, useThemeSwitch };
