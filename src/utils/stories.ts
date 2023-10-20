import { select } from '@storybook/addon-knobs';

import type { AcceptedIconNames } from 'components/Icon';
import iconSelector from 'components/Icon/assets/iconSelector';

export const getIconSelectorKnob = (propName: string, initialValue?: AcceptedIconNames) =>
  select(
    propName,
    Object.keys(iconSelector)
      .sort((a, b) => a.localeCompare(b))
      .map((iconName) => iconName),
    initialValue ?? 'check'
  );
