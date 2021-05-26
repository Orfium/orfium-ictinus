import React, { FC } from 'react';
import Styles from './Asset.style';
import Icon from 'components/Icon';
import { AcceptedIconNames } from 'components/Icon/types';
import { flex } from 'theme/functions';
import AssetExternalLink, { ExternalLinkProps } from './AssetExternalLink';

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
      <div css={flex}>
        <Icon size={24} name={iconName} variant={400} color={'primary'} />
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
