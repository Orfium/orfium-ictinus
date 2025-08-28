import { Link } from '@orfium/ictinus';
import React from 'react';
import Illustration from '../assets/TooltipShowcaseIllustration.svg?react';
import { containerStyles, illustrationStyles } from './TooltipContent.style';

type Props = {
  isInverted?: boolean;
};

const TooltipContent: React.FCC<Props> = ({ isInverted }) => {
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
