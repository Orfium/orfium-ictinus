/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useTheme from '../../../hooks/useTheme';
import { optionStyle } from '../DatePicker.style';
import { ExtraOption } from '../DatePicker';
import { InputClassNames } from 'react-day-picker/types/ClassNames';

type Props = {
  classNames: InputClassNames;
  selectedOption: string;
  setSelectedOption: Function;
  isRangePicker: boolean;
  extraOptions: ExtraOption[];
};
const OverlayComponent: React.FC<Props> = ({
  classNames,
  selectedOption,
  setSelectedOption,
  isRangePicker,
  extraOptions = [],
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <div className={classNames.overlayWrapper} style={{ marginTop: 3 }} {...props}>
      <div className={classNames.overlay}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {isRangePicker && (
            <div css={{ borderRight: '1px solid #dfdfdf' }}>
              {extraOptions.map(option => (
                <div
                  key={option.value}
                  css={optionStyle({ selected: selectedOption === option.value })(theme)}
                  onClick={() => setSelectedOption(option.value)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default OverlayComponent;
