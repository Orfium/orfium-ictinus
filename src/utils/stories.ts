import { select } from '@storybook/addon-knobs';

import type { AcceptedIconNames } from 'components/Icon';
import iconSelector from 'components/Icon/assets/iconSelector';

export const getIconSelectorKnob = (
  propName: string,
  initialValue?: AcceptedIconNames
): AcceptedIconNames =>
  select<AcceptedIconNames>(
    propName,
    /** we add an extra empty-string option so we can have the storybook-knob-option not to add an icon */
    Object.keys({ ...iconSelector, '': '' })
      .sort((a, b) => a.localeCompare(b))
      .map((iconName) => iconName) as AcceptedIconNames[],
    initialValue
  );
