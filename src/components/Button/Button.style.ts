import { Theme } from 'theme';

export const buttonSpanStyle = () => (theme: Theme) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.globals.spacing.get('4'),
  };
};
