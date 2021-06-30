import Tippy from '@tippyjs/react';
import React, { FC } from 'react';
import 'tippy.js/dist/tippy.css';

import Icon from '../../../Icon';
import Styles from './Asset.style';

export interface ExternalLinkProps {
  url: string;
  tooltipContent: string;
}

// @TODO: Introduce a generic tooltip component based on the ACs of the story: https://orfium.atlassian.net/browse/DS-153

const AssetExternalLink: FC<ExternalLinkProps> = ({ tooltipContent, url }) => {
  return (
    <Tippy
      content={tooltipContent}
      arrow
      placement={'right'}
      allowHTML={false}
      css={Styles.tooltip}
    >
      <a css={Styles.externalLink} href={url} rel="noreferrer" target="_blank">
        <Icon name={'externalLinkV2'} size={10} color={'lightGray'} variant={600} />
      </a>
    </Tippy>
  );
};

export default AssetExternalLink;
