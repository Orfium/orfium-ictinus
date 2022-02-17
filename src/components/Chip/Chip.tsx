import React from 'react';
import { generateTestDataId, errorHandler } from 'utils/helpers';

import { BASE_SHADE } from '../../theme/palette';
import { chipStyle, closeIconWrapperStyle } from './Chip.style';
import { ChipProps } from './Chip.types';
import Badge from './components/Badge';
import { defaultProps, errors } from './utils';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';

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
  } = errorHandler<ChipProps>(errors, {
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
