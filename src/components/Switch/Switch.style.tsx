import styled from '@emotion/styled';
import { rem, rgba } from 'polished';

import { flex, flexCenterVertical } from '../../theme/functions';

export const Container = styled.div`
  ${flexCenterVertical};
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SwitchWrapper = styled.div<{ checked: boolean; disabled: boolean }>`
  ${flex};

  .react-switch-handle {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'unset')} !important;
    border: ${({ theme, checked }) =>
      !checked ? `2px solid ${theme.utils.getColor('lightGrey', 300)}` : 0} !important;
    box-sizing: border-box !important;
    transform: translateX(${({ checked }) => (checked ? rem(16) : 0)}) !important;

    :hover {
      box-shadow: ${({ disabled }) => (!disabled ? `${rgba(14, 14, 23, 0.1)} 0 0 0 5px` : 0)};
      background: ${({ theme, checked, disabled }) =>
        !checked && !disabled ? theme.utils.getColor('lightGrey', 150) : undefined} !important;
    }
  }

  .react-switch-bg {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'unset')} !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .react-switch-bg:hover ~ .react-switch-handle {
    box-shadow: ${({ disabled }) => (!disabled ? `${rgba(14, 14, 23, 0.1)} 0 0 0 5px` : 0)};
    background: ${({ theme, checked, disabled }) =>
      !checked && !disabled ? theme.utils.getColor('lightGrey', 150) : undefined} !important;
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes[15]};
  color: ${({ theme }) => theme.utils.getColor('darkGrey', 850)};
`;
