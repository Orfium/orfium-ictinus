import { Button, ThemeProvider } from '@orfium/ictinus';

export default {
  title: 'Original Components/ThemeProvider',
  component: ThemeProvider,

  parameters: { controls: { disable: true } },
};

export const SettingUpAButtonExample = {
  render: () => (
    <ThemeProvider>
      <Button>Hello world</Button>
    </ThemeProvider>
  ),

  name: 'Setting up a button example',
};
