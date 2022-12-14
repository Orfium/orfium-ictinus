import styled from '@emotion/styled';
import { rem, rgba } from 'polished';

import { flex, flexCenterVertical } from '../../theme/functions';

export const Container = styled.div`
  ${flexCenterVertical};
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.get('4')};
`;

export const SwitchWrapper = styled.div<{ isChecked: boolean; isDisabled: boolean }>`
  ${flex};

  .react-switch-handle {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'unset')} !important;
    border: ${({ theme, isChecked }) =>
      !isChecked ? `2px solid ${theme.utils.getColor('lightGrey', 300)}` : 0} !important;
    box-sizing: border-box !important;
    transform: translateX(${({ isChecked }) => (isChecked ? rem(16) : 0)}) !important;

    :hover {
      box-shadow: ${({ isDisabled }) => (!isDisabled ? `${rgba(14, 14, 23, 0.1)} 0 0 0 5px` : 0)};
      background: ${({ theme, isChecked, isDisabled }) =>
        !isChecked && !isDisabled ? theme.utils.getColor('lightGrey', 150) : undefined} !important;
    }
  }

  .react-switch-bg {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'unset')} !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .react-switch-bg:hover ~ .react-switch-handle {
    box-shadow: ${({ isDisabled }) => (!isDisabled ? `${rgba(14, 14, 23, 0.1)} 0 0 0 5px` : 0)};
    background: ${({ theme, isChecked, isDisabled }) =>
      !isChecked && !isDisabled ? theme.utils.getColor('lightGrey', 150) : undefined} !important;
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes[15]};
  color: ${({ theme }) => theme.utils.getColor('darkGrey', 850)};
`;
