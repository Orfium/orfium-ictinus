import { css } from '@emotion/react';
import { rem } from 'theme/utils';

export const contentStyles = (isExpanded: boolean, transitionDuration: number) => css`
  transition: opacity ${isExpanded ? transitionDuration + 100 : 0}ms ease,
    transform ${isExpanded ? transitionDuration + 100 : 0}ms ease;
  opacity: ${Number(isExpanded)};
  transform: translateY(${isExpanded ? 0 : rem('-10px')});
`;
