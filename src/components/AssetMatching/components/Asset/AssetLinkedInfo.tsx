import React, { FC } from 'react';

import Styles from './Asset.style';

interface Props {
  title: JSX.Element | string;
  details: string | number;
}

const AssetLinkedInfo: FC<Props> = ({ title, details }) => {
  return (
    <div css={Styles.linkedRecordings}>
      <p css={Styles.linkedText}>{title}</p>
      <span css={Styles.linkedCount}>{details}</span>
    </div>
  );
};

export default AssetLinkedInfo;
