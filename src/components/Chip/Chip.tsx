import { ClickEvent } from 'hooks/useLoading';
import React from 'react';
import { flatColors } from 'theme/palette';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import { BASE_SHADE } from '../../theme/palette';
import { DivProps } from '../../utils/common';
import { chipStyle, closeIconWrapperStyle } from './Chip.style';
import Badge from './components/Badge';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';

export type Props = {
  /**
   * Determines whether the chip should be read-only or interactive.
   * @default read-only
   */
  styleType?: 'read-only' | 'interactive';
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

type TestProps = {
  dataTestId?: TestId;
};

const Chip = React.forwardRef<HTMLButtonElement, Props & TestProps & DivProps>(
  (
    {
      styleType = 'read-only',
      fill,
      thumbnail,
      isSelected,
      isChecked,
      disabled = false,
      badgeNumber,
      onClick,
      onClear,
      dataTestId = '',
      children,
    },
    ref
  ) => {
    if (styleType === 'read-only' && (isSelected || isChecked || badgeNumber || disabled)) {
      throw new Error(
        'The properties isSelected, isChecked, badgeNumber and disabled are only for Interactive style type Chips.'
      );
    }

    if (styleType === 'interactive' && thumbnail) {
      throw new Error('The property thumbnail is only for Read-Only style type Chips.');
    }

    return (
      <button
        ref={ref}
        data-testid={generateTestDataId('chip', dataTestId)}
        onClick={onClick}
        disabled={disabled}
        css={chipStyle({ styleType, fill, isSelected, onClear, onClick, disabled })}
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
  }
);
Chip.displayName = 'Chip';

export default Chip;
