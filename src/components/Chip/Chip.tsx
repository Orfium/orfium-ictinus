import { ClickEvent } from 'hooks/useLoading';
import React from 'react';
import { flatColors } from 'theme/palette';
import { generateTestDataId, propsHandler } from 'utils/helpers';
import { TestProps } from 'utils/types';

import { BASE_SHADE } from '../../theme/palette';
import { DivProps } from '../../utils/common';
import { chipStyle, closeIconWrapperStyle } from './Chip.style';
import Badge from './components/Badge';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';

type ChipProps = Props & TestProps & DivProps;

const READ_ONLY = 'read-only' as const;
const INTERACTIVE = 'interactive' as const;

const styleType = [READ_ONLY, INTERACTIVE] as const;

const defaultProps = {
  disabled: false,
  styleType: READ_ONLY as typeof styleType[number],
  dataTestId: '',
};

export type Props = {
  /**
   * Determines whether the chip should be read-only or interactive.
   * @default read-only
   */
  styleType?: typeof styleType[number];
  /** Defines the fill color of the component, if filled. */
  fill?: typeof flatColors[number];
  /** An optional thumbnail to show to the left. */
  thumbnail?: { src?: string; name?: string };
  /** Boolean defining if the chip is selected. */
  isSelected?: boolean;
  /** Boolean defining if the check icon is shown. */
  isChecked?: boolean;
  /** Defines the number value of the badge */
  badgeNumber?: number;
  /** Callback function for onClick. */
  onClick?: (event: ClickEvent) => void;
  /** A callback that is being triggered when type is interactive and you press the X icon. */
  onClear?: () => void;
  /** Boolean defining if the chip is disabled. Interactive only. */
  disabled?: boolean;
};

const errors = [
  {
    condition: ({ styleType, isSelected, isChecked, badgeNumber, disabled }: Props) =>
      Boolean(styleType === READ_ONLY && (isSelected || isChecked || badgeNumber || disabled)),
    message:
      'The properties isSelected, isChecked, badgeNumber and disabled are only for Interactive style type Chips.',
  },
  {
    condition: ({ styleType, thumbnail }: Props) => Boolean(styleType === INTERACTIVE && thumbnail),
    message:
      'The properties isSelected, isChecked, badgeNumber and disabled are only for Interactive style type Chips.',
  },
];

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>((props, ref) => {
  const {
    styleType,
    disabled,
    onClick,
    isChecked,
    thumbnail,
    fill,
    isSelected,
    onClear,
    dataTestId,
    children,
    badgeNumber,
  } = propsHandler<ChipProps>(errors, {
    ...defaultProps,
    ...props,
  });

  return (
    <button
      ref={ref}
      data-testid={generateTestDataId('chip', dataTestId)}
      onClick={onClick}
      disabled={disabled}
      css={chipStyle({ styleType, fill, isSelected, onClear, onClick })}
    >
      {isChecked && <Icon size={14} name={'checkmark'} color={'darkGrey'} variant={850} />}
      {thumbnail && (
        <div>
          <Avatar size={'xs'} color={`${fill}-${BASE_SHADE}`} src={thumbnail.src}>
            {thumbnail.name}
          </Avatar>
        </div>
      )}
      <div>{children}</div>
      {badgeNumber && (
        <Badge
          fill={fill}
          badgeNumber={badgeNumber}
          isSelected={isSelected}
          dataTestId={dataTestId}
        />
      )}
      {onClear && (
        <div css={closeIconWrapperStyle(disabled)}>
          <Icon
            size={14}
            name={'close'}
            color={'darkGrey'}
            variant={850}
            onClick={e => {
              e.stopPropagation();
              if (!disabled) {
                onClear();
              }
            }}
          />
        </div>
      )}
    </button>
  );
});
Chip.displayName = 'Chip';

Chip.defaultProps = defaultProps;

export default Chip;
