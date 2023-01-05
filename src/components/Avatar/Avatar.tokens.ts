import globals from 'theme/globals';
import semantic from 'theme/tokens/semantic';
import { rem } from 'theme/utils';

import { AvatarColors, AvatarSizes } from './Avatar.types';

const AVATAR_ICON_SIZE_FACTOR = 0.8;
const AVATAR_STACK_OVERLAP_FACTOR = 0.8;

export type AvatarTokens = {
  size: Record<AvatarSizes, string>;
  iconSize: Record<AvatarSizes, string>;
  avatarStackSize: Record<AvatarSizes, string>;
  color: {
    getBackgroundColor: (color: AvatarColors) => string;
    getForegroundColor: (color: AvatarColors) => string;
  };
  fontSize: Record<AvatarSizes, string>;
};

const parseAvatarIconSize = (val: string) => parseFloat(val) * AVATAR_ICON_SIZE_FACTOR;
const parseAvatarStackSize = (val: string) => rem(parseFloat(val) * AVATAR_STACK_OVERLAP_FACTOR);

const tokens: AvatarTokens = {
  size: {
    1: globals.sizing.get('5'),
    2: globals.sizing.get('6'),
    3: globals.sizing.get('9'),
    4: globals.sizing.get('12'),
    5: globals.sizing.get('15'),
    6: globals.sizing.get('18'),
  },
  iconSize: {
    1: globals.sizing.get('5', parseAvatarIconSize),
    2: globals.sizing.get('6', parseAvatarIconSize),
    3: globals.sizing.get('9', parseAvatarIconSize),
    4: globals.sizing.get('12', parseAvatarIconSize),
    5: globals.sizing.get('15', parseAvatarIconSize),
    6: globals.sizing.get('18', parseAvatarIconSize),
  },
  avatarStackSize: {
    1: globals.sizing.get('5', parseAvatarStackSize),
    2: globals.sizing.get('6', parseAvatarStackSize),
    3: globals.sizing.get('9', parseAvatarStackSize),
    4: globals.sizing.get('12', parseAvatarStackSize),
    5: globals.sizing.get('15', parseAvatarStackSize),
    6: globals.sizing.get('18', parseAvatarStackSize),
  },
  color: {
    getBackgroundColor: (color: AvatarColors) => semantic.palette.get(`accents.${color}.main`),
    getForegroundColor: (color: AvatarColors) => semantic.palette.get(`accents.${color}.contrast`),
  },
  fontSize: {
    1: globals.typography.fontSizes.get('1'),
    2: globals.typography.fontSizes.get('2'),
    3: globals.typography.fontSizes.get('3'),
    4: globals.typography.fontSizes.get('4'),
    5: globals.typography.fontSizes.get('8'),
    6: globals.typography.fontSizes.get('10'),
  },
};

export default tokens;
