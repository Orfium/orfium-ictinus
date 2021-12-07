import React, { FC } from 'react';

import Icon from '../../../Icon';
import Styles from './Asset.style';
import Tooltip from 'components/Tooltip';

export interface ExternalLinkProps {
  url: string;
  tooltipContent: string;
}

const AssetExternalLink: FC<ExternalLinkProps> = ({ tooltipContent, url }) => {
  return (
    <Tooltip content={tooltipContent} placement={'right'} id={'external-link-tooltip'}>
      <a css={Styles.externalLink} href={url} rel="noreferrer" target="_blank">
        <Icon name={'externalLinkV2'} size={10} color={'lightGrey'} variant={600} />
      </a>
    </Tooltip>
  );
};

export default AssetExternalLink;