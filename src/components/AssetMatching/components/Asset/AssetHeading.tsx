import React, { FC } from 'react';
import { flex } from 'theme/functions';

import Styles from './Asset.style';
import AssetExternalLink, { ExternalLinkProps } from './AssetExternalLink';
import Icon from 'components/Icon';
import { AcceptedIconNames } from 'components/Icon/types';


export interface AssetHeadingProps {
  top?: string;
  main: string;
  externalLink?: ExternalLinkProps;
  bottom?: string;
  iconName: AcceptedIconNames;
}

const AssetHeading: FC<AssetHeadingProps> = ({ top, main, bottom, iconName, externalLink }) => {
  return (
    <div css={Styles.headingWrapper}>
      {top && <p css={Styles.subHeadingTop}>{top}</p>}
      <div css={Styles.iconHeadingWrapper}>
        <Icon size={16} name={iconName} variant={400} color={'primary'} />
        <div css={externalLink ? Styles.title : flex}>
          <h3 css={Styles.mainHeading}>{main}</h3>
          {externalLink && <AssetExternalLink {...externalLink} />}
        </div>
      </div>
      {bottom && <p css={Styles.subHeading}>{bottom}</p>}
    </div>
  );
};

export default AssetHeading;
