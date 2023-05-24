import React from 'react';

const overviewTableText = [
  {
    title: 'Headline',
    description:
      'Used for short, high-emphasis text and to establish content hierarchy within the page',
  },
  {
    title: 'Title',
    description:
      'Used for short, medium-emphasis text that is smaller than a headline and for text within components',
  },
  {
    title: 'Label',
    description:
      'Used for medium emphasis text and potentially longer text strings than a title and for text within components',
  },
  {
    title: 'Body',
    description: 'Used for long passages of copy (regular emphasis) and for text within components',
  },
];

const TypographyOverviewShowcase = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        border: '1px solid #E4E7FF',
      }}
    >
      {overviewTableText.map((line, index) => (
        <div
          key={`typography_overview_${index}`}
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            height: '46px',
            paddingLeft: '12px',
            borderBottomLeftRadius: index === overviewTableText.length - 1 ? '8px' : '',
            borderBottomRightRadius: index === overviewTableText.length - 1 ? '8px' : '',
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

export default TypographyOverviewShowcase;
