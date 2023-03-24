import { INTERACTIVE, ChipProps, READ_ONLY, styleType } from './Chip.types';
import { PropsValidationError } from '../../utils/errors';
import { TestProps } from '../../utils/types';

export const defaultProps = {
  isDisabled: false,
  styleType: READ_ONLY as (typeof styleType)[number],
  dataTestId: '',
} as Pick<ChipProps & TestProps, 'isDisabled' | 'styleType' | 'dataTestId'>;

export const errors = [
  {
    condition: ({
      styleType,
      isSelected,
      isChecked,
      badgeNumber,
      isDisabled,
    }: ChipProps): boolean =>
      Boolean(styleType === READ_ONLY && (isSelected || isChecked || badgeNumber || isDisabled)),
    error: new PropsValidationError(
      'The properties isSelected, isChecked, badgeNumber and disabled are only for Interactive style type Chips.'
    ),
  },
  {
    condition: ({ styleType, thumbnail }: ChipProps): boolean =>
      Boolean(styleType === INTERACTIVE && thumbnail),
    error: new PropsValidationError(
      'The property thumbnail is only for Read-Only style type Chips.'
    ),
  },
];
