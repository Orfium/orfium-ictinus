import { rem, vars } from '@orfium/tokens';

export const tooltipStyle = () => {
  return {
    fontSize: vars['font-size']['3'],
    padding: vars.spacing['4'],
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
    margin: `${vars.spacing['6']} 0`,
    height: rem(1),
    borderWidth: 0,
    backgroundColor: vars.color.background.default,
    opacity: '10%',
  };
};

export const tooltipUlStyle = () => () => {
  return { padding: 0, margin: 0 };
};

export const tooltipLiStyle = () => {
  return {
    listStyleType: 'none',
    color: vars.color.neutral['1'],
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: vars.spacing['6'],
    padding: `0px 0px ${rem(-5)}`,
  };
};
