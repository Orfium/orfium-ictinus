import { rem, vars } from '@orfium/tokens';

export const tooltipStyle = () => {
  return {
    fontSize: vars['font-size']['3'],
    padding: `${vars.spacing['4']} ${vars.spacing['6']}`,
    margin: vars.spacing['4'],
    color: vars.color.neutral['1'],
    background: vars.color.background.inverted,
    opacity: '90%',
    borderRadius: vars.spacing['3'],
    minWidth: rem(200),
    whiteSpace: 'nowrap' as const,
  };
};

export const tooltipHrStyle = () => {
  return {
    margin: `${vars.spacing['6']} 0px`,
    height: '1px',
    borderWidth: 0,
    backgroundColor: vars.color.background.default,
    opacity: '10%',
  };
};

export const tooltipUlStyle = () => () => {
  return { padding: '0px', margin: '0px' };
};

export const tooltipLiStyle = () => {
  return {
    listStyleType: 'none',
    color: vars.color.neutral['1'],
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: vars.spacing['6'],
    padding: `${vars.spacing['4']} 0px`,
    'div:last-child': {
      marginLeft: vars.spacing['6'],
      span: { marginLeft: vars.spacing['3'] },
    },
  };
};
