import * as React from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
  const [isToggled, setIsToggled] = React.useState(initialState);
  const toggle = React.useCallback(
    () =>
      setIsToggled((oldState) => {
        console.log('oldState', oldState);

        return !oldState;
      }),
    [setIsToggled]
  );

  return [isToggled, toggle];
};

export default useToggle;
