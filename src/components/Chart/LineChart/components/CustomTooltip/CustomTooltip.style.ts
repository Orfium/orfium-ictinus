import type { Theme } from 'theme';
import { rem } from 'theme/utils';

export const tooltipStyle = () => (theme: Theme) => {
  return {
    fontSize: theme.globals.typography.fontSize.get('3'),
    padding: theme.globals.spacing.get('4'),
    color: theme.globals.colors.get('neutral.1'),
    background: theme.tokens.colors.get('backgroundColor.inverted'),
    opacity: '90%',
    borderRadius: theme.globals.spacing.get('3'),
    minWidth: rem(200),
    whiteSpace: 'nowrap' as const,
  };
};

export const tooltipHrStyle = () => (theme: Theme) => {
  return {
    margin: `${theme.globals.spacing.get('6')} 0`,
    height: rem(1),
    borderWidth: 0,
    backgroundColor: theme.tokens.colors.get('backgroundColor.default'),
    opacity: '10%',
  };
};

export const tooltipUlStyle = () => () => {
  return { padding: 0, margin: 0 };
};

export const tooltipLiStyle = () => (theme: Theme) => {
  return {
    listStyleType: 'none',
    color: theme.globals.colors.get('neutral.1'),
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: theme.globals.spacing.get('6'),
    padding: `0px 0px ${rem(-5)}`,
  };
};
