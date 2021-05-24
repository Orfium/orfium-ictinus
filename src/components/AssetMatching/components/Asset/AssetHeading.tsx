import React, { FC } from 'react';
import Styles from './Asset.style';
import Icon from 'components/Icon';
import { AcceptedIconNames } from 'components/Icon/types';
import { flex } from 'theme/functions';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export interface AssetHeadingProps {
  top?: string;
  main: string;
  externalLink?: {
    url: string;
    tooltipContent: string;
  };
  bottom?: string;
  iconName: AcceptedIconNames;
}

const AssetHeading: FC<AssetHeadingProps> = ({
  top = '',
  main,
  bottom = '',
  iconName,
  externalLink,
}) => {
  return (
    <div css={Styles.headingWrapper}>
      <p css={Styles.subHeadingTop}>{top && top}</p>
      <div css={flex}>
        <Icon size={24} name={iconName} variant={400} color={'primary'} />
        <div css={externalLink ? Styles.title : flex}>
          <h3 css={Styles.mainHeading}>{main}</h3>
          {externalLink && (
            <Tippy
              content={externalLink?.tooltipContent}
              arrow
              placement={'right'}
              allowHTML={false}
              css={Styles.tooltip}
            >
              <a css={Styles.externalLink} href={externalLink.url} rel="noreferrer" target="_blank">
                <Icon name={'externalLinkV2'} size={10} color={'lightGray'} variant={600} />
              </a>
            </Tippy>
          )}
        </div>
      </div>
      <p css={Styles.subHeading}>{bottom && bottom}</p>
    </div>
  );
};

export default AssetHeading;
