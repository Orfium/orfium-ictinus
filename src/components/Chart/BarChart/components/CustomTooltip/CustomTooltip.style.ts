import { rem } from 'polished';
import { Theme } from 'theme';

export const tooltipStyle = () => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes['14'],
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    margin: theme.spacing.sm,
    color: theme.palette.white,
    background: theme.utils.getColor('darkGray', 600),
    opacity: '90%',
    borderRadius: theme.spacing.xsm,
    minWidth: rem(200),
    whiteSpace: 'nowrap' as const,
  };
};

export const tooltipHrStyle = () => (theme: Theme) => {
  return {
    margin: `${theme.spacing.md} 0px`,
    height: '1px',
    borderWidth: 0,
    backgroundColor: theme.palette.white,
    opacity: '10%',
  };
};

export const tooltipUlStyle = () => () => {
  return { padding: '0px', margin: '0px' };
};

export const tooltipLiStyle = () => (theme: Theme) => {
  return {
    listStyleType: 'none',
    color: theme.palette.white,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: theme.spacing.md,
    padding: `${theme.spacing.sm} 0px`,
    'div:last-child': {
      marginLeft: theme.spacing.md,
      span: { marginLeft: theme.spacing.xsm },
    },
  };
};
