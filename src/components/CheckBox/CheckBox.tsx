/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { wrapperStyle, checkboxStyle, labelStyle, checkboxWrapperStyle } from './CheckBox.style';
import useTheme from 'hooks/useTheme';
import Icon from 'components/Icon';
import { useState } from 'react';

export type Props = {
  /** The label of the checkbox. */
  label?: string;
  /** Boolean defining if the checkbox is checked. */
  checked?: boolean;
  /** Callback function for onClick. */
  onClick?(): void;
  /** Boolean defining if the checkbox is checked. */
  disabled?: boolean;
  /** Boolean defining if the checkbox is checked. */
  multi?: boolean;
};

const CheckBox: React.FC<Props> = ({ label, checked, onClick, disabled, multi }) => {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const selectedIconName = multi ? 'minus' : 'check';

  return (
    <span css={wrapperStyle({ disabled })(theme)}>
      <span css={checkboxWrapperStyle(hovered)(theme)}>
        <button
          css={checkboxStyle({ multi, checked })(theme)}
          onClick={onClick && onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={disabled}
          role="checkbox"
          aria-checked={checked}
        >
          <div>{checked && <Icon name={selectedIconName} color={'white'} />}</div>
        </button>
      </span>
      {label && <span css={labelStyle()(theme)}>{label}</span>}
    </span>
  );
};

export default CheckBox;
