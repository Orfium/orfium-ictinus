import { ChangeEvent, useCallback, useEffect, useState } from 'react';

export type OnCheckHandler = (val: boolean, e?: ChangeEvent) => void;

export const useCheck = (isChecked: boolean, onCheck?: OnCheckHandler) => {
  const [isCheckedState, setIsCheckedState] = useState(() => isChecked);

  useEffect(() => {
    setIsCheckedState(isChecked);
  }, [isChecked]);

  const handleCheck = useCallback(
    (isChecked: boolean, e: ChangeEvent) => {
      if (onCheck) {
        onCheck(isChecked, e);
      }

      setIsCheckedState(isChecked);
    },
    [onCheck, setIsCheckedState]
  );

  return { isCheckedState, handleCheck };
};
