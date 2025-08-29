import * as React from 'react';

const useToggle = (isToggledInitialState = false): [boolean, () => void] => {
  const [isToggled, setIsToggled] = React.useState(isToggledInitialState);
  const toggle = React.useCallback(
    () =>
      setIsToggled((isToggledOldState) => {
        return !isToggledOldState;
      }),
    [setIsToggled]
  );

  return [isToggled, toggle];
};

export default useToggle;
