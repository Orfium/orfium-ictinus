/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { bannersContainer } from './BannersContainer.style';

type Props = {
  children: React.ReactNode[];
  /** Banner placed at the top */
  top?: boolean | undefined;
  /** Banner placed at the bottom */
  bottom?: boolean | undefined;
  /** Banner placed at the left */
  left?: boolean | undefined;
  /** Banner placed at the right */
  right?: boolean | undefined;
};

const BannersContainer: React.FC<Props> = ({
  top = false,
  bottom = true,
  left = false,
  right = true,
  children,
}) => {
  const bannersPosition = [top, bottom, left, right];

  return <div css={bannersContainer(bannersPosition)}>{children}</div>;
};

export default BannersContainer;
