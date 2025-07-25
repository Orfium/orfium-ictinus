import { globalLayer } from '@vanilla-extract/css';

export const layerName = {
  theme: 'ictinus-theme',
  reset: 'ictinus-reset',
  component: 'ictinus-component',
  utilities: 'ictinus-utilities',
} as const;

/** The order of the declaration means the priority of the layer. */
const theme = globalLayer(layerName.theme);
const reset = globalLayer(layerName.reset);
const component = globalLayer(layerName.component);
const utilities = globalLayer(layerName.utilities);

export const layers = { theme, reset, component, utilities };
