import { Typography } from 'index';
import type { FCC } from 'react';
import type { FC } from 'react';
import React from 'react';

import {
  containerStyle,
  contentStyle,
  examplesContainerStyle,
  gridContainerStyle,
  gridStyle,
  headerFooterStyle,
  mainContainerStyle,
  siderStyle,
} from './LayoutShowcase.style';

type LayoutProps = {
  hasLeftSlider?: boolean;
  hasRightSlider?: boolean;
};

type GridProps = {
  containers: number[];
};

export const ExamplesContainer: FCC = ({ children }) => {
  return <div css={examplesContainerStyle()}>{children}</div>;
};

export const Layout: FC<LayoutProps> = ({ hasLeftSlider = false, hasRightSlider = false }) => {
  return (
    <div css={containerStyle()}>
      {hasLeftSlider && (
        <Typography variant="body02" component="div" css={siderStyle()}>
          Sider
        </Typography>
      )}
      <div css={mainContainerStyle()}>
        <Typography variant="body02" component="div" css={headerFooterStyle()}>
          Header
        </Typography>
        <Typography variant="body02" component="div" css={contentStyle()}>
          Content
        </Typography>
        <Typography variant="body02" component="div" css={headerFooterStyle()}>
          Footer
        </Typography>
      </div>
      {hasRightSlider && (
        <Typography variant="body02" component="div" css={siderStyle()}>
          Silder
        </Typography>
      )}
    </div>
  );
};

export const Grid: FC<GridProps> = ({ containers }) => {
  return (
    <div css={gridContainerStyle()}>
      {containers.map((container) => (
        <div key={`${container}`} css={gridStyle(container)}>
          {container}%
        </div>
      ))}
    </div>
  );
};
