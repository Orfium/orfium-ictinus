import { rem } from 'polished';

export const sxProp = () => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '100%',
      padding: 0,
      width: rem(36),
    },
  };
};
