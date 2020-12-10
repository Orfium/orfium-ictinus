import { rem } from 'polished';
import { Theme } from 'theme';

export const tooltipStyle = () => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes['14'],
    padding: rem(8),
    color: theme.palette.white,
    background: theme.palette.flat.darkGray[600],
    opacity: '90%',
    borderRadius: '4px',
    minWidth: rem(200),
    whiteSpace: 'nowrap' as const,
  };
};

export const tooltipHrStyle = () => (theme: Theme) => {
  return {
    margin: '17px 0px 13px 0px',
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
    height: '16px',
    padding: '2px 0px',
  };
};
