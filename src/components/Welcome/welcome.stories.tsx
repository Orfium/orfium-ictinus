import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import WelcomeReadme from './Welcome.md';
const IntroductionReadme = require('./INTRODUCTION.md').default;
const UsageReadme = require('./USAGE.md').default;
const EnviromentReadme = require('./ENVIROMENT.md').default;
const ColorsReadme = require('./COLORS.md').default;
const TypographyReadme = require('./TYPOGRAPHY.md').default;
const IconographyReadme = require('./ICONOGRAPHY.md').default;

const options = { info: { disable: true }, options: { showPanel: false } };

storiesOf('Welcome', module)
  .addParameters({
    readme: {
      content: IntroductionReadme,
    },
  })
  .add('Introduction', () => <></>, options)
  .addParameters({
    readme: {
      content: UsageReadme,
    },
  })
  .add('Usage', () => <></>, options)
  .addParameters({
    readme: {
      content: EnviromentReadme,
    },
  })
  .add('Enviroment', () => <></>, options)
  .addParameters({
    readme: {
      content: ColorsReadme,
    },
  })
  .add('Colors', () => <></>, options)
  .addParameters({
    readme: {
      content: TypographyReadme,
    },
  })
  .add('Typography', () => <></>, options)
  .addParameters({
    readme: {
      content: IconographyReadme,
    },
  })
  .add('Iconography', () => <></>, options);
