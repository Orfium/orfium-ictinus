import { statesConfig } from './statesConfig';

export type GetDisabled = {
  style: {
    opacity: number;
    cursor: string;
  };
  opacity: number;
  cursor: string;
};

const opacityAmount = statesConfig.disabled.opacity.amount;
const cursor = statesConfig.disabled.cursor.name;

/**
 * On disabled opacity is dropped in half and cursor is 'not-allowed'
 * **/
export const getDisabled = (): GetDisabled => {
  return {
    style: {
      opacity: opacityAmount,
      cursor: cursor,
    },
    opacity: opacityAmount,
    cursor: cursor,
  };
};
