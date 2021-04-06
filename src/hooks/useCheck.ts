import { ChangeEvent, useCallback, useState } from 'react';

export type OnCheckHandler = (val: boolean, e: ChangeEvent) => void;

export const useCheck = (isChecked = false, onCheck?: OnCheckHandler) => {
  const [checked, setChecked] = useState(isChecked);

  const handleCheck = useCallback(
    (checked, e) => {
      if (onCheck) {
        onCheck(checked, e);
      }

      setChecked(checked);
    },
    [onCheck, setChecked]
  );

  return { checked, handleCheck };
};
