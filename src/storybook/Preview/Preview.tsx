import { Preview as SBPreview } from '@storybook/addon-docs';
import React, { FC } from 'react';

import useTheme from '../../hooks/useTheme';

export type PreviewProps = {
  isInverted?: boolean;
};

const Preview: FC<PreviewProps> = ({ children, isInverted }) => {
  const theme = useTheme();

  return (
    <SBPreview
      css={{
        background: theme.tokens.backgroundColor.get(isInverted ? 'invertedDark' : 'tintedDark'),
      }}
    >
      {children}
    </SBPreview>
  );
};

export default Preview;
