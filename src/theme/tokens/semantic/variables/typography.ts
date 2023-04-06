const typography = {
  headline01: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.bold}',
      lineHeight: '{lineHeight.10}',
      fontSize: '{fontSize.10}',
      letterSpacing: '{letterSpacing.0}',
    },
    type: 'typography',
    description: 'Largest text on the screen, reserved for the page title. Can only appear once',
  },
  headline02: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.bold}',
      lineHeight: '{lineHeight.9}',
      fontSize: '{fontSize.9}',
      letterSpacing: '{letterSpacing.0}',
    },
    type: 'typography',
    description:
      'Headline variant 2, reserved for important copy that is not a title (e.g. section titles)',
  },
  headline03: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.bold}',
      lineHeight: '{lineHeight.8}',
      fontSize: '{fontSize.8}',
      letterSpacing: '{letterSpacing.0}',
    },
    type: 'typography',
    description: 'Headline variant 3',
  },
  headline04: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.bold}',
      lineHeight: '{lineHeight.7}',
      fontSize: '{fontSize.6}',
      letterSpacing: '{letterSpacing.0}',
    },
    type: 'typography',
    description: 'Headline variant 4',
  },
  headline05: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.bold}',
      lineHeight: '{lineHeight.6}',
      fontSize: '{fontSize.5}',
      letterSpacing: '{letterSpacing.0}',
    },
    type: 'typography',
    description: 'Headline variant 5',
  },
  title01: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.bold}',
      lineHeight: '{lineHeight.5}',
      fontSize: '{fontSize.4}',
      letterSpacing: '{letterSpacing.1}',
    },
    type: 'typography',
    description:
      'Smaller than headline, reserved for short, medium emphasis text or text within components. Large variant',
  },
  title02: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.bold}',
      lineHeight: '{lineHeight.4}',
      fontSize: '{fontSize.3}',
      letterSpacing: '{letterSpacing.1}',
    },
    type: 'typography',
    description:
      'Smaller than headline, reserved for short, medium emphasis text or text within components. Medium variant',
  },
  title03: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.bold}',
      lineHeight: '{lineHeight.3}',
      fontSize: '{fontSize.2}',
      letterSpacing: '{letterSpacing.2}',
    },
    type: 'typography',
    description:
      'Smaller than headline, reserved for short, medium emphasis text or text within components. Small variant',
  },
  label01: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.5}',
      fontSize: '{fontSize.4}',
      letterSpacing: '{letterSpacing.1}',
    },
    type: 'typography',
    description:
      'Smaller than headline, resrved for short to medium, medium emphasis text (less than titles) or text within components. Large variant',
  },
  label02: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.4}',
      fontSize: '{fontSize.3}',
      letterSpacing: '{letterSpacing.2}',
    },
    type: 'typography',
    description:
      'Smaller than headline, resrved for short to medium, medium emphasis text (less than titles) or text within components. Medium variant',
  },
  label03: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.3}',
      fontSize: '{fontSize.2}',
      letterSpacing: '{letterSpacing.2}',
    },
    type: 'typography',
    description:
      'Smaller than headline, resrved for short to medium, medium emphasis text (less than titles) or text within components. Small variant',
  },
  body01: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.regular}',
      lineHeight: '{lineHeight.5}',
      fontSize: '{fontSize.4}',
      letterSpacing: '{letterSpacing.2}',
    },
    type: 'typography',
    description:
      'Used for longer text string of regular emphasis or text within components. Large variant',
  },
  body02: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.regular}',
      lineHeight: '{lineHeight.4}',
      fontSize: '{fontSize.3}',
      letterSpacing: '{letterSpacing.2}',
    },
    type: 'typography',
    description:
      'Used for longer text string of regular emphasis or text within components. Medium variant',
  },
  body03: {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.regular}',
      lineHeight: '{lineHeight.3}',
      fontSize: '{fontSize.2}',
      letterSpacing: '{letterSpacing.2}',
    },
    type: 'typography',
    description:
      'Used for longer text string of regular emphasis or text within components. Small variant',
  },
} as const;

export default typography;
