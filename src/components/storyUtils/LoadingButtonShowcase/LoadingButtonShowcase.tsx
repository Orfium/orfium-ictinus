import React, { useState } from 'react';
import Card from '../../Card';
import Button from '../../Button';
import { showcaseContainerStyle } from '../CardShowcase/CardShowcase.style';

const LoadingButtonShowcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  const CardContent = () => (
    <div css={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
      <div css={{ display: 'flex', gap: '32px' }}>
        <Button isLoading>Primary</Button>
        <Button type="secondary" isLoading>
          Secondary
        </Button>
        <Button type="tertiary" isLoading>
          Tertiary
        </Button>
        <Button type="danger" isLoading>
          Danger
        </Button>
        <Button type="inverted" isLoading>
          Inverted
        </Button>
        <Button type="invertedAlt" isLoading>
          InvertedAlt
        </Button>
      </div>
      <div>Press the Button below to trigger loading for 4s</div>
      <Button isLoading={isLoading} onClick={handleClick}>
        Click here
      </Button>
    </div>
  );

  return (
    <div css={showcaseContainerStyle}>
      <Card>
        <CardContent />
      </Card>
    </div>
  );
};

export default LoadingButtonShowcase;
