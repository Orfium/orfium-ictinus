import { rem } from 'theme/utils';

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: rem(8),
  };
};
