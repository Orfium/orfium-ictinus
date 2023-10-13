import React from 'react';

import { containerStyles, illustrationStyles } from './TooltipContent.style';
import Illustration from '../assets/TooltipShowcaseIllustration.svg';
import Link from 'components/Link';

type Props = {
  isInverted?: boolean;
};

const TooltipContent: React.FC<Props> = ({ isInverted }) => {
  return (
    <div css={containerStyles(isInverted)}>
      <div css={illustrationStyles(isInverted)}>
        <Illustration />
      </div>
      <div css={{ textAlign: 'center' }}>
        It was a dark and stormy night; the rain fell in torrents
      </div>
      <Link href="#" type={isInverted ? 'primary' : 'inverted'} iconName="externalLink">
        Learn more
      </Link>
    </div>
  );
};

export default TooltipContent;
