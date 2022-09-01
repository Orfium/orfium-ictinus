import { ChangeEvent, useCallback, useEffect, useState } from 'react';

export type OnCheckHandler = (val: boolean, e?: ChangeEvent) => void;

export const useCheck = (isChecked: boolean, onCheck?: OnCheckHandler) => {
  const [isCheckedState, setIsCheckedState] = useState(() => isChecked);

  useEffect(() => {
    setIsCheckedState(isChecked);
  }, [isChecked]);

  const handleCheck = useCallback(
    (checkedCheckbox, e) => {
      if (onCheck) {
        onCheck(checkedCheckbox, e);
      }

      setIsCheckedState(checkedCheckbox);
    },
    [onCheck, setIsCheckedState]
  );

  return { isCheckedState, handleCheck };
};
