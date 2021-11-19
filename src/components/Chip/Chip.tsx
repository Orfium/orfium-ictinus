import { ClickEvent } from 'hooks/useLoading';
import React from 'react';
import { flatColors } from 'theme/palette';
import { generateTestDataId } from 'utils/helpers';
import { TestId } from 'utils/types';

import { BASE_SHADE } from '../../theme/palette';
import { DivProps } from '../../utils/common';
import { iconWrapperStyle, chipStyle, closeIconWrapperStyle } from './Chip.style';
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
  /** Callback function for onClick. */
  onClick?: (event: ClickEvent) => void;
  /** A callback that is being triggered when type is interactive and you press the X icon. */
  onClear?: () => void;
};

type TestProps = {
  dataTestId?: TestId;
};

const Chip = React.forwardRef<HTMLDivElement, Props & TestProps & DivProps>(
  (
    {
      styleType = 'read-only',
      fill,
      thumbnail,
      isSelected,
      isChecked,
      onClick,
      onClear,
      dataTestId = '',
      children,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-testid={generateTestDataId('chip', dataTestId)}
        onClick={onClick}
        css={chipStyle({ styleType, fill, isSelected, onClear, onClick })}
      >
        {isChecked && <Icon size={14} name={'checkmark'} color={'darkGrey'} variant={850} />}
        {thumbnail && (
          <div>
            <Avatar size={'xxxs'} color={`${fill}-${BASE_SHADE}`} src={thumbnail.src}>
              {thumbnail.name}
            </Avatar>
          </div>
        )}
        <div>{children}</div>
        {onClear && (
          <div css={closeIconWrapperStyle()}>
            <Icon
              size={14}
              name={'close'}
              color={'darkGrey'}
              variant={850}
              onClick={e => {
                e.stopPropagation();
                onClear();
              }}
            />
          </div>
        )}
      </div>
    );
  }
);
Chip.displayName = 'Chip';

export default Chip;
