import { ChangeEvent, useCallback, useState } from 'react';

export const useCheck = (onCheck?: (val: boolean, e: ChangeEvent) => void) => {
  const [checked, setChecked] = useState(false);

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
