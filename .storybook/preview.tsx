// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
import React from 'react';
import { addParameters } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs';
import ThemeProvider from '../src/components/ThemeProvider';
import { useThemeSwitch } from '../src/hooks/useThemeSwitch';
import styled from '@emotion/styled';
import Typography from '../src/storybook/Typography';
import { css } from '@emotion/react';
import { UsageGuidelines, Tip } from '../src/storybook';

const viewPorts = {
  desktop1920: {
    name: 'Desktop 1920',
    styles: {
      width: '1920px',
      height: '1080px',
    },
    type: 'desktop',
  },
  desktop1440: {
    name: 'Desktop 1440',
    styles: {
      width: '1440px',
      height: '1080px',
    },
    type: 'desktop',
  },
  desktop1366: {
    name: 'Desktop 1366',
    styles: {
      width: '1366px',
      height: '768px',
    },
    type: 'desktop',
  },
  desktop1200: {
    name: 'Desktop 1200',
    styles: {
      width: '1200px',
      height: '800px',
    },
    type: 'desktop',
  },
  tablet1024: {
    name: 'Tablet 1024',
    styles: {
      width: '1024px',
      height: '1024px',
    },
    type: 'tablet',
  },
  tablet970: {
    name: 'Tablet 970',
    styles: {
      width: '970px',
      height: '1024px',
    },
    type: 'tablet',
  },
  mob480: {
    name: 'Mobile 480',
    styles: {
      width: '480px',
      height: '320px',
    },
    type: 'mobile',
  },
  mob320: {
    name: 'Mobile 320',
    styles: {
      width: '320px',
      height: '480px',
    },
    type: 'mobile',
  },
};

const ThemeSwitcher = () => {
  const themeSwitchState = useThemeSwitch();
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        onClick={themeSwitchState.toggle}
        css={{
          backgroundColor: themeSwitchState.isDark ? '#fff' : 'transparent',
          color: '#000',
          outline: 'none',
          borderRadius: 4,
        }}
      >
        turn {themeSwitchState.isDark ? 'semantic' : 'dark'} on
      </button>
    </div>
  );
};

const Wrapper: React.FC = ({ children }) => {
  const themeSwitchState = useThemeSwitch();
  return (
    <div
      style={{
        backgroundColor: themeSwitchState.isDark ? '#0E0E17' : '#ffffff',
        width: '100%',
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        borderRadius: 10,
      }}
    >
      {children}
    </div>
  );
};

export const decorators = [
  (Story: any) => {
    return (
      <Wrapper>
        <div style={{ margin: 15 }}>
          <ThemeSwitcher />
          <Story />
        </div>
      </Wrapper>
    );
  },
  (Story: any) => (
    <ThemeProvider theme={{}}>
      <Story />
    </ThemeProvider>
  ),
];

const customTypography = css`
  &:after {
    content: '';
    margin-top: 8px;
    background: #323338;
    height: 2px;
  }
  display: grid;
`;
const inputEmpty = styled.input(({ theme }) => ({}));
export const parameters = {
  viewport: {
    viewports: viewPorts,
  },
  options: { showPanel: true },
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': {
      index: 1,
    },
    canvas: { title: 'Sandbox' },
  },
  docs: {
    container: ({ children, context }: any) => (
      <DocsContainer context={context}>
        <ThemeProvider>{children}</ThemeProvider>
      </DocsContainer>
    ),
    components: {
      h1: ({ children }: any) => (
        <Typography css={customTypography} role={'headline01'}>
          {children}
        </Typography>
      ),
      h2: ({ children }: any) => (
        <Typography css={customTypography} role={'headline02'}>
          {children}
        </Typography>
      ),
      h3: ({ children }: any) => <Typography role={'headline03'}>{children}</Typography>,
      h4: ({ children }: any) => <Typography role={'headline04'}>{children}</Typography>,
      p: ({ children }: any) => <Typography role={'body01'}>{children}</Typography>,
      span: ({ children }: any) => <Typography role={'body01'}>{children}</Typography>,
      div: ({ children }: any) => <Typography role={'body01'}>{children}</Typography>,
      input: inputEmpty,
      UsageGuidelines,
      Tip,
    },
  },
};

export default parameters;
