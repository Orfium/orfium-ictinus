import { css } from '@emotion/react';
import React from 'react';

import { rem } from '../../../theme/utils';
import Card from '../../Card';
import Chip from '../../Chip';
import Tooltip from '../../Tooltip';
import {
  customContentStyle,
  tooltipContainerStyle,
  tooltipRowStyle,
} from './TooltipShowcase.style';

const CustomContent = () => {
  return (
    <Card elevated="02" radius="xsm">
      <div css={customContentStyle()}>
        <div
          css={css`
            margin-bottom: ${rem(8)};
          `}
        >
          By hover here you can see:
        </div>
        <Chip fill="teal" shade="100">
          useful custom info
        </Chip>
      </div>
    </Card>
  );
};

const TooltipShowcase = () => {
  return (
    <div css={tooltipContainerStyle()}>
      <h2>Tooltip with text-only content</h2>
      <div css={tooltipRowStyle()}>
        <Tooltip id={'left'} content="By hover here you can see useful info" placement={'left'}>
          <button>Left</button>
        </Tooltip>
        <Tooltip id={'right'} content="By hover here you can see useful info" placement={'right'}>
          <button>Right</button>
        </Tooltip>
      </div>

      <div css={tooltipRowStyle()}>
        <Tooltip id={'top'} content="By hover here you can see useful info" placement={'top'}>
          <button>Top</button>
        </Tooltip>
        <Tooltip id={'bottom'} content="By hover here you can see useful info" placement={'bottom'}>
          <button>Bottom</button>
        </Tooltip>
      </div>
      <h2>Tooltip with component content</h2>
      <Tooltip id={'right'} isTransparent content={CustomContent()} placement={'right'}>
        <button>Right</button>
      </Tooltip>
    </div>
  );
};

export default TooltipShowcase;
