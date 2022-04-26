import styled from '@emotion/styled';
import { rem, rgba } from 'polished';

import { flex, flexCenterVertical } from '../../theme/functions';

export const Container = styled.div`
  ${flexCenterVertical};
  flex-direction: row;
  justify-content: space-between;
  min-width: ${rem(150)};
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SwitchWrapper = styled.div<{ checked: boolean; disabled: boolean }>`
  ${flex};
  .react-switch-handle {
    border: ${({ theme, checked }) =>
      !checked ? `2px solid ${theme.utils.getColor('lightGrey', 300)}` : 0} !important;
    box-sizing: border-box !important;

    :hover {
      box-shadow: ${({ disabled }) => (!disabled ? `${rgba(14, 14, 23, 0.1)} 0 0 0 5px` : 0)};
      background: ${({ theme, checked }) =>
        !checked ? theme.utils.getColor('lightGrey', 150) : undefined} !important;
    }
  }

  .react-switch-bg:hover ~ .react-switch-handle {
    box-shadow: ${({ disabled }) => (!disabled ? `${rgba(14, 14, 23, 0.1)} 0 0 0 5px` : 0)};
    background: ${({ theme, checked }) =>
      !checked ? theme.utils.getColor('lightGrey', 150) : undefined} !important;
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes[14]};
  color: ${({ theme }) => theme.utils.getColor('darkGrey', 850)};
`;
