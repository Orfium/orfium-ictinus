import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const tooltipStyle = () => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes.get('3'),
    padding: `${theme.spacing.get('4')} ${theme.spacing.get('6')}`,
    margin: theme.spacing.get('4'),
    color: theme.palette.white,
    background: theme.utils.getColor('darkGrey', 750),
    opacity: '90%',
    borderRadius: theme.spacing.get('3'),
    minWidth: rem(200),
    whiteSpace: 'nowrap' as const,
  };
};

export const tooltipHrStyle = () => (theme: Theme) => {
  return {
    margin: `${theme.spacing.get('6')} 0px`,
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
    height: theme.spacing.get('6'),
    padding: `${theme.spacing.get('4')} 0px`,
    'div:last-child': {
      marginLeft: theme.spacing.get('6'),
      span: { marginLeft: theme.spacing.get('3') },
    },
  };
};
