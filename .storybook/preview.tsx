// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
import React from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import ThemeProvider from '../src/components/ThemeProvider';
import styled from '@emotion/styled';
import Typography from '../src/storybook/Typography';
import Link from '../src/storybook/Link';
import {
  UsageGuidelines,
  SubsectionHeader,
  SectionHeader,
  Tip,
  Note,
  Preview,
  Alert,
} from '../src/storybook';
import {
  TypographyResetFontSmooth,
  TypographyWrapper as SBTypographyWrapper,
} from '../src/storybook/Typography/Typography.style';
import Box from '../src/components/Box';
import { Preview as SBPreview } from '@storybook/react';

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

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box flex={1} flexDirection={'column'} p={'3'} position={'relative'}>
      {children}
    </Box>
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
const preview: SBPreview = {
  decorators,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    viewport: {
      viewports: viewPorts,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting Started',
          ['Welcome', 'Installation', 'Development', 'Migration', '*'],
          'Foundations',
          ['Theme', 'Design Tokens', 'Layout', 'Accessibility', 'Colors [v4]', '*'],
          'Utilities',
          ['Theme Utilities', '*', 'Hooks'],
          'Updated Components',
          'Original Components',
          ['*', ['*', 'Docs']],
        ],
        locales: 'en-US',
      },
      showPanel: true,
    },
    chromatic: { delay: 2000 },
    viewMode: 'docs',
    docs: {
      source: { type: 'code' },
      story: {
        inline: true,
      },
      container: (props: any) => (
        // @ts-ignore
        <DocsContainer {...props}>
          <ThemeProvider>{props.children}</ThemeProvider>
        </DocsContainer>
      ),
      components: {
        h1: ({ children, rest }: any) => (
          <Box>
            {/*// @ts-ignore*/}
            <Typography
              {...rest}
              css={[SBTypographyWrapper, TypographyResetFontSmooth]}
              variant={'headline01'}
            >
              {children}
            </Typography>
          </Box>
        ),
        h2: ({ children, rest }: any) => (
          <Box>
            {/*// @ts-ignore*/}
            <Typography
              {...rest}
              css={[SBTypographyWrapper, TypographyResetFontSmooth]}
              variant={'headline02'}
            >
              {children}
            </Typography>
          </Box>
        ),
        h3: ({ children, rest }: any) => (
          <Box>
            {/*// @ts-ignore*/}
            <Typography
              {...rest}
              css={[SBTypographyWrapper, TypographyResetFontSmooth]}
              variant={'headline03'}
            >
              {children}
            </Typography>
          </Box>
        ),
        h4: ({ children, rest }: any) => (
          <Box>
            {/*// @ts-ignore*/}
            <Typography
              {...rest}
              css={[SBTypographyWrapper, TypographyResetFontSmooth]}
              variant={'headline04'}
            >
              {children}
            </Typography>
          </Box>
        ),
        p: ({ children, rest }: any) => (
          <Box my={'6'}>
            <Typography {...rest} css={TypographyResetFontSmooth} variant={'body01'}>
              {children}
            </Typography>
          </Box>
        ),
        li: ({ children, rest }: any) => (
          <li>
            <Box my={'6'}>
              <Typography {...rest} css={TypographyResetFontSmooth} variant={'body01'}>
                {children}
              </Typography>
            </Box>
          </li>
        ),
        span: ({ children }: any) => (
          <Typography css={TypographyResetFontSmooth} variant={'body01'}>
            {children}
          </Typography>
        ),
        div: ({ children }: any) => (
          <Typography css={TypographyResetFontSmooth} variant={'body01'}>
            {children}
          </Typography>
        ),
        a: ({ href, children, ...args }: any) => (
          <Link href={href} {...args}>
            {children}
          </Link>
        ),
        input: inputEmpty,
        UsageGuidelines,
        Tip,
        Note,
        Preview,
        SubsectionHeader,
        SectionHeader,
        Alert,
      },
    },
  },
};

export default preview;
