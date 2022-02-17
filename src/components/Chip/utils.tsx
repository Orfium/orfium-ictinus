import { INTERACTIVE, Props, READ_ONLY, styleType } from './Chip.types';

export const defaultProps = {
  disabled: false,
  styleType: READ_ONLY as typeof styleType[number],
  dataTestId: '',
};

export const errors = [
  {
    condition: ({ styleType, isSelected, isChecked, badgeNumber, disabled }: Props): boolean =>
      Boolean(styleType === READ_ONLY && (isSelected || isChecked || badgeNumber || disabled)),
    message:
      'The properties isSelected, isChecked, badgeNumber and disabled are only for Interactive style type Chips.',
  },
  {
    condition: ({ styleType, thumbnail }: Props): boolean =>
      Boolean(styleType === INTERACTIVE && thumbnail),
    message:
      'The properties isSelected, isChecked, badgeNumber and disabled are only for Interactive style type Chips.',
  },
];
