import { css } from '@emotion/react';
import { rem } from 'polished';

export const contentStyles = (expanded: boolean, transitionDuration: number) => css`
  transition: opacity ${expanded ? transitionDuration + 100 : 0}ms ease,
    transform ${expanded ? transitionDuration + 100 : 0}ms ease;
  opacity: ${Number(expanded)};
  transform: translateY(${expanded ? 0 : rem('-10px')});
`;
