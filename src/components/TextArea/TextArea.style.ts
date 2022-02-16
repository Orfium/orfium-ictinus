import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';
import { Props } from './TextArea';
import { Props as TextInputWrapperProps } from 'components/TextInputBase';
import { inputStyle as baseInputStyle } from 'components/TextInputBase/TextInputBase.style';

export const inputStyle = ({ resizeEnabled, ...rest }: Props & TextInputWrapperProps) => (
  theme: Theme
): SerializedStyles => css`
  resize: ${!resizeEnabled ? 'none' : 'both'};
  ${baseInputStyle({ ...rest })(theme)}
`;
