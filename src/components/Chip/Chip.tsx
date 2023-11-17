import useTheme from 'hooks/useTheme';
import React, { ForwardedRef, Fragment } from 'react';
import { errorHandler, generateTestDataId, generateUniqueID } from 'utils/helpers';

import { avatarStyle, chipStyle, closeIconWrapperStyle } from './Chip.style';
import { ChipProps } from './Chip.types';
import Badge from './components/Badge';
import { defaultProps, errors } from './utils';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';

const Chip = React.forwardRef<HTMLButtonElement | HTMLDivElement, ChipProps>(
  (
    {
      styleType = defaultProps.styleType,
      isDisabled = defaultProps.isDisabled,
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
      id = generateUniqueID('chip_'),
    } = rest;

    errorHandler<ChipProps>(errors, { styleType, isSelected, isChecked, badgeNumber, isDisabled });

    const theme = useTheme();

    const contents = (
      <Fragment>
        {isChecked && (
          <Icon size={14} name={'check'} color={theme.globals.oldColors.flat.darkGrey[850]} />
        )}
        {thumbnail && (
          <div css={avatarStyle()}>
            <Avatar color={'blue'} src={thumbnail.src} dataTestPrefixId="chip">
              {thumbnail.name}
            </Avatar>
          </div>
        )}
        <div aria-label={id}>{children}</div>
        {badgeNumber && (
          <Badge
            fill={fill}
            badgeNumber={badgeNumber}
            isSelected={isSelected}
            dataTestId={dataTestId}
          />
        )}
        {onClear && (
          <div aria-hidden={!onClear} css={closeIconWrapperStyle(isDisabled)}>
            <Icon
              size={14}
              name={'close'}
              color={theme.globals.oldColors.flat.darkGrey[850]}
              onClick={(e) => {
                e.stopPropagation();
                if (!isDisabled) {
                  onClear();
                }
              }}
              hasHover={false}
              dataTestId={generateTestDataId('chip-delete', dataTestId)}
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
        disabled={isDisabled}
      >
        {contents}
      </button>
    );
  }
);
Chip.displayName = 'Chip';

export default Chip;
