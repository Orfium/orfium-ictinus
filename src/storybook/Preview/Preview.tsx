import { Preview as SBPreview } from '@storybook/addon-docs';
import React, { FCC } from 'react';

import useTheme from '../../hooks/useTheme';

export type PreviewProps = {
  isInverted?: boolean;
};

const Preview: FCC<PreviewProps> = ({ children, isInverted }) => {
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

export default Preview;
