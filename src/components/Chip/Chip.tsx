import React, { ForwardedRef, Fragment } from 'react';
import { errorHandler, generateTestDataId } from 'utils/helpers';

import { BASE_SHADE } from '../../theme/palette';
import { chipStyle, closeIconWrapperStyle } from './Chip.style';
import { ChipProps } from './Chip.types';
import Badge from './components/Badge';
import { defaultProps, errors } from './utils';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';

const Chip = React.forwardRef<HTMLButtonElement | HTMLDivElement, ChipProps>(
  (
    {
      styleType = defaultProps.styleType,
      disabled = defaultProps.disabled,
      dataTestId = defaultProps.dataTestId,
      ...rest
    },
    ref
  ) => {
    const {
      onClick,
      isChecked,
      thumbnail,
      fill,
      isSelected,
      onClear,
      children,
      badgeNumber,
    } = rest;

    errorHandler<ChipProps>(errors, { styleType, isSelected, isChecked, badgeNumber, disabled });

    const contents = (
      <Fragment>
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
      </Fragment>
    );

    if (styleType === 'read-only') {
      return (
        <div
          ref={ref as ForwardedRef<HTMLDivElement>}
          data-testid={generateTestDataId('chip', dataTestId)}
          css={chipStyle({ styleType, fill, isSelected })}
          aria-readonly="true"
        >
          {contents}
        </div>
      );
    }

    return (
      <button
        role="button"
        ref={ref as ForwardedRef<HTMLButtonElement>}
        data-testid={generateTestDataId('chip', dataTestId)}
        css={chipStyle({ styleType, fill, isSelected, onClear, onClick })}
        onClick={onClick}
        disabled={disabled}
      >
        {contents}
      </button>
    );
  }
);
Chip.displayName = 'Chip';

export default Chip;
