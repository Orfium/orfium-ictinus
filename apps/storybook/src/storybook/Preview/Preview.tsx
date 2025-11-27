import { Canvas as SBPreview } from '@storybook/addon-docs/blocks';
import type { FCC } from 'react';

import { vars } from '@orfium/tokens';

export type PreviewProps = {
  isInverted?: boolean;
};

const Canvas: FCC<PreviewProps> = ({ children, isInverted }) => {
  return (
    // @ts-expect-error - preview component
    <SBPreview
      css={{
        background: vars.color.background[isInverted ? 'inverted' : 'default'],
      }}
    >
      <>{children}</>
    </SBPreview>
  );
};

export default Canvas;
