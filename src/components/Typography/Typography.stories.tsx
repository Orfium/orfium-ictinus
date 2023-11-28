import Typography from './Typography';
import Stack from '../storyUtils/Stack';
import { FIGMA_URL } from '../../utils/common';
import SectionHeader from '../../storybook/SectionHeader';

export default {
  title: 'Updated Components/Typography',
  component: Typography,

  parameters: {
    design: [
      {
        name: 'Typography',
        type: 'figma',
        url: `${FIGMA_URL}?node-id=14861%3A61126`,
      },
    ],
  },
};

export const Variants = {
  render: () => (
    <Stack isVertical>
      <Typography variant={'headline01'}>Headline 01</Typography>
      <Typography variant={'headline02'}>Headline 02</Typography>
      <Typography variant={'headline03'}>Headline 03</Typography>
      <Typography variant={'headline04'}>Headline 04</Typography>
      <Typography variant={'headline05'}>Headline 05</Typography>
      <Typography variant={'title01'}>Title 01</Typography>
      <Typography variant={'title02'}>Title 02</Typography>
      <Typography variant={'title03'}>Title 03</Typography>
      <Typography variant={'label01'}>Label 01</Typography>
      <Typography variant={'label02'}>Label 02</Typography>
      <Typography variant={'label03'}>Label 03</Typography>
      <Typography variant={'label04'}>Label 04</Typography>
      <Typography variant={'body01'}>Body 01</Typography>
      <Typography variant={'body02'}>Body 02</Typography>
      <Typography variant={'body03'}>Body 03</Typography>
      <Typography variant={'body04'}>Body 04</Typography>
    </Stack>
  ),

  name: 'Variants',
};

export const FontSpacingVariations = {
  render: () => (
    <Stack isVertical>
      <Typography variant={'headline01'}>Headline 01 (Normal)</Typography>
      <Typography variant={'title01'}>Title 01 (Normal)</Typography>
      <Typography variant={'label01'}>Label 01 (Normal)</Typography>
      <Typography variant={'body01'}>Body 01 (Normal)</Typography>
      <Typography fontSpacing="mono" variant={'headline01'}>
        Headline 01 (Mono)
      </Typography>
      <Typography fontSpacing="mono" variant={'title01'}>
        Title 01 (Mono)
      </Typography>
      <Typography fontSpacing="mono" variant={'label01'}>
        Label 01 (Mono)
      </Typography>
      <Typography fontSpacing="mono" variant={'body01'}>
        Body 01 (Mono)
      </Typography>
    </Stack>
  ),

  name: 'Font spacing variations',
};

export const TypesDefault = {
  render: () => (
    <Stack isVertical>
      <Typography type={'primary'}>Primary</Typography>
      <Typography type={'secondary'}>Secondary</Typography>
      <Typography type={'error'}>Error</Typography>
      <Typography type={'active'}>Active</Typography>
      <Typography type={'visited'}>Visited</Typography>
    </Stack>
  ),

  name: 'Types (default)',
};

export const TypesInverted = {
  render: () => (
    <Stack isVertical isInverted>
      <Typography type={'primary'} isInverted>
        Primary
      </Typography>
      <Typography type={'secondary'} isInverted>
        Secondary
      </Typography>
      <Typography type={'error'} isInverted>
        Error
      </Typography>
      <Typography type={'active'} isInverted>
        Active
      </Typography>
      <Typography type={'visited'} isInverted>
        Visited
      </Typography>
    </Stack>
  ),

  name: 'Types (inverted)',
};

export const ExtraStyle = {
  render: () => (
    <Stack isVertical>
      <Typography isBold>Bold</Typography>
      <Typography isItalic>Italic</Typography>
      <Typography isUnderline>Underline</Typography>
    </Stack>
  ),

  name: 'Extra style',
};

export const AsSpecificElement = {
  render: () => (
    <Stack isVertical>
      <Typography variant={'headline01'} component="h1">
        Headline 01 - H1
      </Typography>
      <Typography variant={'headline02'} component="h2">
        Headline 02 - H2
      </Typography>
      <Typography variant={'headline03'} component="h3">
        Headline 03 - H3
      </Typography>
      <Typography variant={'headline04'} component="h4">
        Headline 04 - H4
      </Typography>
      <Typography variant={'headline05'} component="h5">
        Headline 05 - H5
      </Typography>
      <Typography variant={'title01'} component="h6">
        Title 01 - H6
      </Typography>
      <Typography variant={'title02'} component="h6">
        Title 02 - H6
      </Typography>
      <Typography variant={'title03'} component="h6">
        Title 03 - H6
      </Typography>
      <Typography variant={'label01'} component="span">
        Label 01 - SPAN
      </Typography>
      <Typography variant={'label02'} component="span">
        Label 02 - SPAN
      </Typography>
      <Typography variant={'label03'} component="span">
        Label 03 - SPAN
      </Typography>
      <Typography variant={'body01'} component="p">
        Body 01 - P
      </Typography>
      <Typography variant={'body02'} component="p">
        Body 02 - P
      </Typography>
      <Typography variant={'body03'} component="p">
        Body 03 - P
      </Typography>
    </Stack>
  ),

  name: 'As specific element',
};
