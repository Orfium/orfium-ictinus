/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import Tooltip from '../../Tooltip';

const TooltipShowcase = () => {
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 250px;
      `}
    >
      <Tooltip id={'top'} content="By hover here you can see useful info" placement={'top'}>
        <button>Top</button>
      </Tooltip>
      <Tooltip id={'bottom'} content="By hover here you can see useful info" placement={'bottom'}>
        <button>Bottom</button>
      </Tooltip>
      <Tooltip id={'right'} content="By hover here you can see useful info" placement={'right'}>
        <button>Right</button>
      </Tooltip>
      <Tooltip id={'left'} content="By hover here you can see useful info" placement={'left'}>
        <button>Left</button>
      </Tooltip>
    </div>
  );
};

export default TooltipShowcase;
