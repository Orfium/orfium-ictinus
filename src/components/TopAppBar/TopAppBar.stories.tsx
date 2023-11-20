import TopAppBar from './TopAppBar';
import Stack from '../storyUtils/Stack';
import TextField from '../TextField';
import TopAppBarShowcase from '../storyUtils/TopAppBarShowcase';
import { boolean } from '@storybook/addon-knobs';
import UserMenu from './components/UserMenu/UserMenu';
import { FIGMA_URL } from '../../utils/common';
import { AvatarColors } from '../Avatar';

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
      }}
    >
      <TopAppBarShowcase
        onMenuIconClick={() => {}}
        userMenu={{
          items: [],
          userName: '',
          userAvatar: { src: undefined, letter: null },
          onSelect: () => {},
        }}
      />
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
      <TopAppBarShowcase
        hasAdditionalTools={true}
        onMenuIconClick={() => {}}
        userMenu={{
          items: [],
          userName: '',
          userAvatar: { src: undefined, letter: null },
          onSelect: () => {},
        }}
      />
    </div>
  ),

  name: 'with Additional Tools',
};

export const WithDarkThemeEnabled = {
  render: () => (
    <div
      style={{
        padding: 10,
      }}
    >
      <TopAppBarShowcase
        isDark={true}
        onMenuIconClick={() => {}}
        userMenu={{
          items: [],
          userName: '',
          userAvatar: { src: undefined, letter: null },
          onSelect: () => {},
        }}
      />
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
        onMenuIconClick={() => {}}
        userMenu={{
          items: [],
          userName: '',
          userAvatar: { src: undefined, letter: null },
          onSelect: () => {},
        }}
      />
    </div>
  ),

  name: 'playground',
};
