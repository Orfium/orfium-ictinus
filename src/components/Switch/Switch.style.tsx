import styled from '@emotion/styled';
import { rem, rgba } from 'polished';

export const Wrapper = styled.div<{ checked: boolean; disabled: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: ${rem(150)};
  gap: ${({ theme }) => theme.spacing.sm};

  .react-switch-handle {
    border: ${({ theme, checked }) =>
      !checked ? `2px solid ${theme.utils.getColor('lightGrey', 300)}` : 0} !important;
    box-sizing: border-box !important;

    :hover {
      box-shadow: ${({ disabled }) => (!disabled ? `${rgba(14, 14, 23, 0.1)} 0 0 0 5px` : 0)};
      background: ${({ theme }) => theme.utils.getColor('lightGrey', 150)} !important;
    }
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes[14]};
  color: ${({ theme }) => theme.utils.getColor('darkGrey', 850)};
`;
