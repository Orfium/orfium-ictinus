//@ts-nocheck
import { css } from '@emotion/core';

export const wrapperStyles = (transitionDuration: number) => css`
  //transition: height ${transitionDuration}ms ease;
`;

export const contentStyles = (expanded, transitionDuration) => css`
  transition: opacity ${expanded ? transitionDuration + 100 : 0}ms ease,
    transform ${expanded ? transitionDuration + 100 : 0}ms ease;
  opacity: ${Number(expanded)};
  transform: translateY(${expanded ? 0 : '-10px'});
`;
