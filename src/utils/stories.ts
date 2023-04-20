import { select } from '@storybook/addon-knobs';

import iconSelector from 'components/Icon/assets/iconSelector';

export const getIconSelectorKnob = (propName: string) =>
  select(
    propName,
    Object.keys(iconSelector)
      .sort((a, b) => a.localeCompare(b))
      .map((iconName) => iconName),
    'check'
  );
