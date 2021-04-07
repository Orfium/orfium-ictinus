import { ChangeEvent, useCallback, useEffect, useState } from 'react';

export type OnCheckHandler = (val: boolean, e: ChangeEvent) => void;

export const useCheck = (isChecked = false, onCheck?: OnCheckHandler) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(prevState => !prevState);
  }, [isChecked]);

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
