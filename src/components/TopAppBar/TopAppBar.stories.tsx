import TopAppBar from './TopAppBar';
import TopAppBarShowcase from '../storyUtils/TopAppBarShowcase';
import { boolean } from '@storybook/addon-knobs';
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
};

export const Playground = {
  render: () => (
    <div
      style={{
        padding: 10,
      }}
    >
      <TopAppBarShowcase
        isDark={boolean('isDark', false)}
        isSearchDisabled={boolean('disabled search', false)}
        hasSearchHandler={boolean('hasSearchHandler', false)}
        hasAdditionalTools={boolean('hasAdditionalTools', false)}
        hasLogo={boolean('hasLogo', false)}
      />
    </div>
  ),

  name: 'playground',
};
