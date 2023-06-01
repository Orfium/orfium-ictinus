// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
import React from 'react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';
import ThemeProvider from '../src/components/ThemeProvider';
import styled from '@emotion/styled';
import Typography from '../src/storybook/Typography';
import { UsageGuidelines, Tip, Preview } from '../src/storybook';
import { TypographyWrapper as SBTypographyWrapper } from '../src/storybook/Typography/Typography.style';
import Box from '../src/components/Box';

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

const Wrapper: React.FC = ({ children }) => {
  return (
    <div
      style={{
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
        <Box m={'6'}>
          <Story />
        </Box>
      </Wrapper>
    );
  },
  (Story: any) => (
    <ThemeProvider theme={{}}>
      <Story />
    </ThemeProvider>
  ),
];

const inputEmpty = styled.input(({ theme }) => ({}));
export const parameters = {
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
  viewport: {
    viewports: viewPorts,
  },
  options: { showPanel: true },
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
    },
    canvas: { title: 'Sandbox' },
  },
  docs: {
    page: DocsPage,
    inlineStories: true,
    container: ({ children, context }: any) => (
      <DocsContainer context={context}>
        <ThemeProvider>{children}</ThemeProvider>
      </DocsContainer>
    ),
    components: {
      h1: ({ children }: any) => (
        <Box mx={'6'}>
          {/*// @ts-ignore*/}
          <Typography css={SBTypographyWrapper} variant={'headline01'}>
            {children}
          </Typography>
        </Box>
      ),
      h2: ({ children }: any) => (
        <Box mx={'6'}>
          {/*// @ts-ignore*/}
          <Typography css={SBTypographyWrapper} variant={'headline02'}>
            {children}
          </Typography>
        </Box>
      ),
      h3: ({ children }: any) => (
        <Box mx={'6'}>
          {/*// @ts-ignore*/}
          <Typography css={SBTypographyWrapper} variant={'headline03'}>
            {children}
          </Typography>
        </Box>
      ),
      h4: ({ children }: any) => (
        <Box mx={'6'}>
          {/*// @ts-ignore*/}
          <Typography css={SBTypographyWrapper} variant={'headline04'}>
            {children}
          </Typography>
        </Box>
      ),
      p: ({ children }: any) => (
        <Box mx={'6'}>
          <Typography variant={'body01'}>{children}</Typography>
        </Box>
      ),
      span: ({ children }: any) => <Typography variant={'body01'}>{children}</Typography>,
      div: ({ children }: any) => <Typography variant={'body01'}>{children}</Typography>,
      input: inputEmpty,
      UsageGuidelines,
      Tip,
      Preview,
    },
  },
};

export default parameters;
