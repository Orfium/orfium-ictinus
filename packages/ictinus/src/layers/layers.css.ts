import { generateIdentifier, globalLayer } from '@vanilla-extract/css';

/** The order of the declaration means the priority of the layer. */
export const ictinus = 'ictinus';
export const theme = 'ictinus.theme';
export const reset = 'ictinus.reset';
export const components = `ictinus.${generateIdentifier()}`;
export const utilities = 'ictinus.utilities';

globalLayer([ictinus, theme, reset, components, utilities].join(', '));
