import * as React from 'react';
// import IntroductionReadme from './INTRODUCTION.md';
const IntroductionReadme = require('./INTRODUCTION.md').default;
const UsageReadme = require('./USAGE.md').default;
const EnvironmentReadme = require('./ENVIROMENT.md').default;
const ColorsReadme = require('./COLORS.md').default;
const TypographyReadme = require('./TYPOGRAPHY.md').default;
const IconographyReadme = require('./ICONOGRAPHY.md').default;

export default {
  title: 'Welcome',
  parameters: {
    info: {
      disable: true,
    },
    options: {
      showPanel: false,
    },
  },
};

export const introduction = () => <React.Fragment />;
introduction.story = {
  parameters: {
    readme: {
      content: IntroductionReadme,
    },
  },
};

export const usage = () => <React.Fragment />;
usage.story = {
  parameters: {
    readme: {
      content: UsageReadme,
    },
  },
};

export const environment = () => <React.Fragment />;
environment.story = {
  parameters: {
    readme: {
      content: EnvironmentReadme,
    },
  },
};

export const colors = () => <React.Fragment />;
colors.story = {
  parameters: {
    readme: {
      content: ColorsReadme,
    },
  },
};

export const typography = () => <React.Fragment />;
typography.story = {
  parameters: {
    readme: {
      content: TypographyReadme,
    },
  },
};

export const iconography = () => <React.Fragment />;
iconography.story = {
  parameters: {
    readme: {
      content: IconographyReadme,
    },
  },
};
