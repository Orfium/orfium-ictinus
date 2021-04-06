import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

export type OnCheckHandler = (
  val: boolean,
  setChecked: Dispatch<SetStateAction<boolean>>,
  e: ChangeEvent
) => void;

export const useCheck = (onCheck?: OnCheckHandler) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = useCallback(
    (checked, e) => {
      if (onCheck) {
        onCheck(checked, setChecked, e);
      }

      setChecked(checked);
    },
    [onCheck, setChecked]
  );

  return { checked, handleCheck };
};
