import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

export const monthWrapperStyle = (): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: column;
    gap: ${vars.spacing['5']};
    padding: ${vars.spacing['7']};
  `;
};

export const monthHeaderWrapperStyle = () => (): SerializedStyles => css`
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
`;

export const monthHeaderNavigationIconWrapperStyle =
  ({ position = 'left' }: { position: 'left' | 'right' }) =>
  (): SerializedStyles => css`
    cursor: pointer;
    margin: auto ${rem(5)};
    position: absolute;
    ${position === 'left' ? 'left: 0' : 'right: 0'};
    top: 0;
    bottom: 0;
    height: fit-content;
    z-index: 10;
  `;

export const monthHeaderTitleWrapperStyle = (): SerializedStyles => css`
  padding: 0;
  align-content: center;
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const monthHeaderTitleStyle = ({
  isRangePicker,
}: {
  isRangePicker: boolean;
}): SerializedStyles => css`
  margin: 0 ${vars.spacing['4']};
  display: flex;
  justify-content: center;
  cursor: ${!isRangePicker && 'pointer'};
  font-weight: ${vars.weight.medium};
`;
