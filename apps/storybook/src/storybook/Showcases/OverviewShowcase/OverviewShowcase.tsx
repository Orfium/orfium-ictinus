import type { FCC } from 'react';
import React from 'react';

type Props = {
  data: { title: string; description: string }[];
};

const OverviewShowcase: FCC<Props> = ({ data }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        border: '1px solid #E4E7FF',
      }}
    >
      {data.map((line, index) => (
        <div
          key={`overview_${index}_${line.title}`}
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            height: '46px',
            paddingLeft: '12px',
            borderBottomLeftRadius: index === data.length - 1 ? '8px' : '',
            borderBottomRightRadius: index === data.length - 1 ? '8px' : '',
            borderTopLeftRadius: index === 0 ? '8px' : '',
            borderTopRightRadius: index === 0 ? '8px' : '',
            background: index % 2 === 0 ? '#E7EEFE' : '#FFFFFF',
          }}
        >
          <div css={{ width: '65px', fontSize: '16px', fontWeight: 700, color: '#212332' }}>
            {line.title}
          </div>
          <div css={{ fontSize: '14px', fontWeight: 400, color: '#54587F' }}>
            {line.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewShowcase;
