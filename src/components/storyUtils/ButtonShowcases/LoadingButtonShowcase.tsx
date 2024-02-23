import React, { useState } from 'react';

import Button from '../../Button';
import Card from '../../Card';
import { showcaseContainerStyle } from '../CardShowcase/CardShowcase.style';

const LoadingButtonShowcase: React.FCC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCompact, setIsLoadingCompact] = useState(false);

  const handleClick = (setIsLoadingValue: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setIsLoadingValue(true);
    setTimeout(() => {
      setIsLoadingValue(false);
    }, 4000);
  };

  const CardContent = () => (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: 'center',
        padding: '24px',
      }}
    >
      <div css={{ display: 'flex', gap: '32px' }}>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <Button isLoading>Primary</Button>
          <Button size="compact" isLoading>
            Primary
          </Button>
        </div>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <Button type="secondary" isLoading>
            Secondary
          </Button>
          <Button size="compact" type="secondary" isLoading>
            Secondary
          </Button>
        </div>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <Button type="tertiary" isLoading>
            Tertiary
          </Button>
          <Button size="compact" type="tertiary" isLoading>
            Tertiary
          </Button>
        </div>
        <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <Button type="danger" isLoading>
            Danger
          </Button>
          <Button size="compact" type="danger" isLoading>
            Danger
          </Button>
        </div>
      </div>
      <div>Press the Button below to trigger loading for 4s</div>
      <div css={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
        <Button isLoading={isLoading} onClick={handleClick(setIsLoading)}>
          Click here
        </Button>
        <Button
          size="compact"
          isLoading={isLoadingCompact}
          onClick={handleClick(setIsLoadingCompact)}
        >
          Click here
        </Button>
      </div>
    </div>
  );

  return (
    <div css={showcaseContainerStyle}>
      <Card isTransparent>
        <CardContent />
      </Card>
    </div>
  );
};

export default LoadingButtonShowcase;
