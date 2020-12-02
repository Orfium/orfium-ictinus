import { Theme } from '../../../theme';
import { css, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';

interface WrapperProps {
  hasLogoIcon: boolean;
}

const wrapper = ({ hasLogoIcon }: WrapperProps) => (theme: Theme): SerializedStyles => css`
  background-color: ${hasLogoIcon ? 'transparent' : theme.palette.flat.lightGray[700]};
  margin: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} 0px;
  border-radius: ${theme.spacing.xsm};
  width: 200px;
  max-width: 400px;
  height: 46px;
`;

export const PlaceholderWrapper = styled.div`
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  wrapper,
};
