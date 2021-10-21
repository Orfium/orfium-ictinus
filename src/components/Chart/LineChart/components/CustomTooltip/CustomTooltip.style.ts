import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const tooltipStyle = () => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes['14'],
    padding: theme.spacing.sm,
    color: theme.palette.white,
    background: theme.utils.getColor('darkGrey', 750),
    opacity: '90%',
    borderRadius: theme.spacing.xsm,
    minWidth: rem(200),
    whiteSpace: 'nowrap' as const,
  };
};

export const tooltipHrStyle = () => (theme: Theme) => {
  return {
    margin: `${theme.spacing.md} 0`,
    height: rem(1),
    borderWidth: 0,
    backgroundColor: theme.palette.white,
    opacity: '10%',
  };
};

export const tooltipUlStyle = () => () => {
  return { padding: 0, margin: 0 };
};

export const tooltipLiStyle = () => (theme: Theme) => {
  return {
    listStyleType: 'none',
    color: theme.palette.white,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: theme.spacing.md,
    padding: `0px 0px ${rem(-5)}`,
  };
};
