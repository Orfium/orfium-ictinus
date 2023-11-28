import { Canvas as SBPreview } from '@storybook/addon-docs';
import type { FCC } from 'react';
import React from 'react';

import useTheme from '../../hooks/useTheme';

export type PreviewProps = {
  isInverted?: boolean;
};

const Canvas: FCC<PreviewProps> = ({ children, isInverted }) => {
  const theme = useTheme();

  return (
    // @ts-ignore
    <SBPreview
      css={{
        background: theme.tokens.colors.get(
          isInverted ? 'backgroundColor.inverted' : 'backgroundColor.tinted'
        ),
      }}
    >
      <>{children}</>
    </SBPreview>
  );
};

export default Canvas;
