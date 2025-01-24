import { showcaseContent } from './Tabs.style';
import type { TabOrientation } from './types';
import { options } from '../Filter/constants';
import Tag from '../Tag';

export const getItems = (hasCounter = false) => {
  return [
    {
      id: 'geller',
      label: 'Geller',
      ...(hasCounter ? { counter: 4 } : {}),
    },
    {
      id: 'bing',
      label: 'Bing',
      ...(hasCounter ? { counter: 3 } : {}),
    },
    {
      id: 'tribbiani',
      label: 'Tribbiani',
      ...(hasCounter ? { counter: 2 } : {}),
    },
    {
      id: 'green',
      label: 'Green',
      ...(hasCounter ? { counter: 3 } : {}),
    },
    {
      id: 'buffay',
      label: 'Buffay',
      ...(hasCounter ? { counter: 3 } : {}),
    },
  ];
};

export const getContent = (orientation: TabOrientation) => {
  const getTags = (selectedName: string) => {
    return options
      .filter((option) => option.label.toLowerCase().includes(selectedName))
      .map((name) => (
        <Tag key={name.value} color="blue">
          {name.label}
        </Tag>
      ));
  };

  return {
    geller: <div css={showcaseContent(orientation)}>{getTags('geller')}</div>,
    bing: <div css={showcaseContent(orientation)}>{getTags('bing')}</div>,
    tribbiani: <div css={showcaseContent(orientation)}>{getTags('tribbiani')}</div>,
    green: <div css={showcaseContent(orientation)}>{getTags('green')}</div>,
    buffay: <div css={showcaseContent(orientation)}>{getTags('buffay')}</div>,
  };
};
