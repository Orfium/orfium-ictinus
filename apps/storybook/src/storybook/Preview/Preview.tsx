import { Canvas as SBPreview } from '@storybook/addon-docs/blocks';
import type { FCC } from 'react';

import { useTheme } from '@orfium/ictinus';

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
          isInverted ? 'backgroundColor.inverted' : 'backgroundColor.default'
        ),
      }}
    >
      <>{children}</>
    </SBPreview>
  );
};

export default Canvas;
