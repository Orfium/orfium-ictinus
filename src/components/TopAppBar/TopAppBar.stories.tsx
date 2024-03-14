import TopAppBar from './TopAppBar';
import TopAppBarShowcase from '../storyUtils/TopAppBarShowcase';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Original Components/TopNavBar',
  component: TopAppBar,

  parameters: {
    design: [
      {
        type: 'figma',
        url: `${FIGMA_URL}?node-id=1213%3A74735`,
      },
    ],
  },

  args: {
    hasSearchHandler: false,
    hasAdditionalTools: false,
    hasLogo: false,
  },
};

export const WithLogoPlaceholder = {
  render: () => (
    <div
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <TopAppBarShowcase />
      <TopAppBarShowcase hasSearchHandler />
    </div>
  ),

  name: 'with Logo Placeholder',
  parameters: {
    controls: { disable: true },
  },
};

export const WithAdditionalTools = {
  render: () => (
    <div
      style={{
        padding: 10,
      }}
    >
      <TopAppBarShowcase hasAdditionalTools={true} />
    </div>
  ),

  name: 'with Additional Tools',
  parameters: {
    controls: { disable: true },
  },
};

export const WithDarkThemeEnabled = {
  render: () => (
    <div
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <TopAppBarShowcase isDark />
      <TopAppBarShowcase isDark hasSearchHandler />
    </div>
  ),

  name: 'with Dark theme enabled',
  parameters: {
    controls: { disable: true },
  },
};

export const Playground = {
  render: (args) => {
    const { isDark, isSearchDisabled, hasSearchHandler, hasAdditionalTools, hasLogo } = args;
    return (
      <div
        style={{
          padding: 10,
        }}
      >
        <TopAppBarShowcase
          isDark={isDark}
          isSearchDisabled={isSearchDisabled}
          hasSearchHandler={hasSearchHandler}
          hasAdditionalTools={hasAdditionalTools}
          hasLogo={hasLogo}
        />
      </div>
    );
  },

  name: 'Playground',

  parameters: {
    controls: {
      include: ['isDark', 'isSearchDisabled', 'hasSearchHandler', 'hasAdditionalTools', 'hasLogo'],
    },
  },
};
