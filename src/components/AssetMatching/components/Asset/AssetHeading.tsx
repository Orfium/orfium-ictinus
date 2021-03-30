import React, { FC } from 'react';
import Styles from './Asset.style';
import Icon from 'components/Icon';
import { AcceptedIconNames } from 'components/Icon/types';
import { flex } from 'theme/functions';

interface Props {
  top?: string;
  main: string;
  bottom?: string;
  iconName: AcceptedIconNames;
}
const AssetHeading: FC<Props> = ({ top = '', main, bottom = '', iconName }) => {
  return (
    <div css={Styles.headingWrapper}>
      <p css={Styles.subHeadingTop}>{top && top}</p>
      <div css={flex}>
        <Icon size={24} name={iconName} color={'primary'} />
        <h3 css={Styles.mainHeading}>{main}</h3>
      </div>
      <p css={Styles.subHeading}>{bottom && bottom}</p>
    </div>
  );
};

export default AssetHeading;
