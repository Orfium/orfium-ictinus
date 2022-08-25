import { PropsValidationError } from '../../utils/errors';
import { TestProps } from '../../utils/types';
import { INTERACTIVE, Props, READ_ONLY, styleType } from './Chip.types';

export const defaultProps = {
  isDisabled: false,
  styleType: READ_ONLY as typeof styleType[number],
  dataTestId: '',
} as Pick<Props & TestProps, 'isDisabled' | 'styleType' | 'dataTestId'>;

export const errors = [
  {
    condition: ({ styleType, isSelected, isChecked, badgeNumber, isDisabled }: Props): boolean =>
      Boolean(styleType === READ_ONLY && (isSelected || isChecked || badgeNumber || isDisabled)),
    error: new PropsValidationError(
      'The properties isSelected, isChecked, badgeNumber and disabled are only for Interactive style type Chips.'
    ),
  },
  {
    condition: ({ styleType, thumbnail }: Props): boolean =>
      Boolean(styleType === INTERACTIVE && thumbnail),
    error: new PropsValidationError(
      'The property thumbnail is only for Read-Only style type Chips.'
    ),
  },
];
