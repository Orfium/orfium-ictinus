import { ChangeEvent, useCallback, useEffect, useState } from 'react';

export type OnCheckHandler = (val: boolean, e?: ChangeEvent) => void;

export const useCheck = (isChecked: boolean, onCheck?: OnCheckHandler) => {
  const [checked, setIsChecked] = useState(() => isChecked);

  useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]);

  const handleCheck = useCallback(
    (checkedCheckbox: boolean, e: ChangeEvent) => {
      if (onCheck) {
        onCheck(checkedCheckbox, e);
      }

      setIsChecked(checkedCheckbox);
    },
    [onCheck, setIsChecked]
  );

  return { checked, handleCheck };
};
