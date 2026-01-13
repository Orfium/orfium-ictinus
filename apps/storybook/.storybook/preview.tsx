// THIS DECORATOR MUST GO FIRST, OR THE STORY SOURCE GENERATES INCORRECTLY
// Add prop tables to components (based on component type interfaces)
import styled from '@emotion/styled';
import { ThemeProvider } from '@orfium/ictinus';
import { Box, ThemeProvider as VanillaThemeProvider } from '@orfium/ictinus/vanilla';
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import type { Decorator, Preview as SBPreview } from '@storybook/react-vite';
import React from 'react';
import {
  Alert,
  Note,
  Preview,
  SectionHeader,
  SubsectionHeader,
  Tip,
  UsageGuidelines,
} from '../src/storybook';
import Link from '../src/storybook/Link';
import Typography from '../src/storybook/Typography';
import {
  TypographyWrapper as SBTypographyWrapper,
  TypographyResetFontSmooth,
} from '../src/storybook/Typography/Typography.style';

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

export const withTheme: Decorator = (
  StoryFn,
  { globals: { theme = 'light' as 'light' | 'dark' } }
) => {
  return (
    <VanillaThemeProvider key={theme} colorScheme={theme}>
      <ThemeProvider theme={{}}>
        <Box display="flex" flexDirection="column" position="relative" p="7" minHeight="full">
          <StoryFn />
        </Box>
      </ThemeProvider>
    </VanillaThemeProvider>
  );
};

const inputEmpty = styled.input(() => ({}));
const preview: SBPreview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme for the components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'light' },
          { value: 'dark', icon: 'moon', title: 'dark' },
        ],
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
    controls: {
      sort: 'requiredFirst',
    },

    viewport: {
      options: viewPorts,
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

      container: (props: React.PropsWithChildren<DocsContainerProps>) => (
        <DocsContainer {...props}>
          <VanillaThemeProvider colorScheme="light">
            <ThemeProvider>{props.children}</ThemeProvider>
          </VanillaThemeProvider>
        </DocsContainer>
      ),

      components: {
        h1: ({ children, ...rest }: React.PropsWithChildren) => (
          <Box>
            <Typography
              {...rest}
              css={[SBTypographyWrapper, TypographyResetFontSmooth]}
              variant={'headline01'}
            >
              {children}
            </Typography>
          </Box>
        ),
        h2: ({ children, ...rest }: React.PropsWithChildren) => (
          <Box>
            <Typography
              {...rest}
              css={[SBTypographyWrapper, TypographyResetFontSmooth]}
              variant={'headline02'}
            >
              {children}
            </Typography>
          </Box>
        ),
        h3: ({ children, ...rest }: React.PropsWithChildren) => (
          <Box>
            <Typography
              {...rest}
              css={[SBTypographyWrapper, TypographyResetFontSmooth]}
              variant={'headline03'}
            >
              {children}
            </Typography>
          </Box>
        ),
        h4: ({ children, ...rest }: React.PropsWithChildren) => (
          <Box>
            <Typography
              {...rest}
              css={[SBTypographyWrapper, TypographyResetFontSmooth]}
              variant={'headline04'}
            >
              {children}
            </Typography>
          </Box>
        ),
        p: ({ children, ...rest }: React.PropsWithChildren) => (
          <Box my={'6'}>
            <Typography
              {...rest}
              css={TypographyResetFontSmooth}
              variant={'body01'}
              component="span"
            >
              {children}
            </Typography>
          </Box>
        ),
        li: ({ children, ...rest }: React.PropsWithChildren) => (
          <li>
            <Box my={'6'}>
              <Typography {...rest} css={TypographyResetFontSmooth} variant={'body01'}>
                {children}
              </Typography>
            </Box>
          </li>
        ),
        span: ({ children }: React.PropsWithChildren) => (
          <Typography css={TypographyResetFontSmooth} variant={'body01'}>
            {children}
          </Typography>
        ),
        div: ({ children }: React.PropsWithChildren) => (
          <Typography css={TypographyResetFontSmooth} variant={'body01'}>
            {children}
          </Typography>
        ),
        a: ({ href, children, ...args }: React.PropsWithChildren<{ href: string }>) => (
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

      codePanel: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
