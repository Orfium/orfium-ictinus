import * as React from 'react';

const defaultContextData = {
  dark: false,
  toggle: () => {
    console.log('toggle with no provider');
  },
};

const ThemeContext = React.createContext(defaultContextData);
const useThemeSwitch = () => {
  return React.useContext(ThemeContext);
};

const ThemeSwitchProvider: React.FC<{}> = ({ children }) => {
  const [themeState, setThemeState] = React.useState({
    dark: true,
  });

  return (
    <ThemeContext.Provider
      value={{
        dark: themeState.dark,
        toggle: () => {
          console.log('toggle theme');
          setThemeState((themeState: any) => ({ dark: !themeState.dark }));
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeSwitchProvider, useThemeSwitch };
