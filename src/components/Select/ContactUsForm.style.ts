import styled from '@emotion/styled';

export const TextAreaFieldWrapper = styled.div`
  min-height: 200px;

  textarea {
    min-height: 200px;
  }
`;

export const ContactUsContainer = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const NotificationsContent = styled.div<{ margin?: number }>`
  border-radius: 8px;
  flex-direction: column;
  margin: ${props => props.margin ?? 32}px 0;
  z-index: 11;
`;

export const SelectWrapper = styled.div<{ isDisabled: boolean; hasValue: boolean }>`
  & > div > div {
    max-width: unset;
    min-height: unset;
  }

  /** we need this in case of disabled field with initial value to align the label correctly */
  ${props =>
    props.isDisabled &&
    props.hasValue &&
    `
    label:not(:placeholder-shown) {
      transform: translate(0.4%, -35%) scale(0.8) !important;
    }
  `}
`;
