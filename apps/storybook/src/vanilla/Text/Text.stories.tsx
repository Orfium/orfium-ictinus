import { Box, Text } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Text> = {
  title: 'Vanilla/Text',
  component: Text,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg">
      <Text asChild typography="headline01">
        <h1>Headline 01 - H1</h1>
      </Text>
      <Text asChild typography="headline02">
        <h2>Headline 02 - H2</h2>
      </Text>
      <Text asChild typography="headline03">
        <h3>Headline 03 - H3</h3>
      </Text>
      <Text asChild typography="headline04">
        <h4>Headline 04 - H4</h4>
      </Text>
      <Text asChild typography="headline05">
        <h5>Headline 05 - H5</h5>
      </Text>
      <Text asChild typography="title01">
        <h6>Title 01 - H6</h6>
      </Text>
      <Text asChild typography="title02">
        <h6>Title 02 - H6</h6>
      </Text>
      <Text asChild typography="title03">
        <h6>Title 03 - H6</h6>
      </Text>
      <Text asChild typography="label01">
        <span>Label 01 - SPAN</span>
      </Text>
      <Text asChild typography="label02">
        <span>Label 02 - SPAN</span>
      </Text>
      <Text asChild typography="label03">
        <span>Label 03 - SPAN</span>
      </Text>
      <Text asChild typography="body01">
        <p>Body 01 - P</p>
      </Text>
      <Text asChild typography="body02">
        <p>Body 02 - P</p>
      </Text>
      <Text asChild typography="body03">
        <p>Body 03 - P</p>
      </Text>
      <Text asChild typography="body04">
        <p>Body 04 - P</p>
      </Text>
    </Box>
  ),
};
