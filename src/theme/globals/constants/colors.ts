const colors = {
  gradient: {
    '1': {
      value: 'linear-gradient(-90deg, #F814A1 0%, #4945EE 100%)',
      type: 'color',
    },
    '2': {
      value: 'linear-gradient(90deg, #B9CDFC 0%, #B9C0FF 100%)',
      type: 'color',
    },
    '3': {
      value: 'linear-gradient(-90deg, #1B214F 0%, #020D25 100%)',
      type: 'color',
    },
  },
  orange: {
    '1': {
      value: '#FFE6CF',
      type: 'color',
    },
    '2': {
      value: '#FFC187',
      type: 'color',
    },
    '3': {
      value: '#FCA144',
      type: 'color',
    },
    '4': {
      value: '#FA8002',
      type: 'color',
    },
    '5': {
      value: '#E37400',
      type: 'color',
    },
  },
  red: {
    '1': {
      value: '#FFE7F0',
      type: 'color',
    },
    '2': {
      value: '#FFB8D1',
      type: 'color',
    },
    '3': {
      value: '#F882AC',
      type: 'color',
    },
    '4': {
      value: '#FF176B',
      type: 'color',
      description: 'AA compliant against white and red.1',
    },
    '5': {
      value: '#CB205D',
      type: 'color',
      description: 'AA compliant against white and red.1',
    },
  },
  tinted: {
    '1': {
      value: '#ffffff',
      type: 'color',
    },
    '2': {
      value: '#F5F5FF',
      type: 'color',
    },
    '3': {
      value: '#E7E8FF',
      type: 'color',
    },
    '4': {
      value: '#D6D8FF',
      type: 'color',
    },
    '5': {
      value: '#B9C0FF',
      type: 'color',
      description: 'AA compliant against white and tinted.1',
    },
  },
  blue: {
    '1': {
      value: '#e7eefe',
      type: 'color',
    },
    '2': {
      value: '#b9cdfc',
      type: 'color',
    },
    '3': {
      value: '#175bf5',
      type: 'color',
      description: 'AA compliant against white and blue.1',
    },
    '4': {
      value: '#1552DD',
      type: 'color',
      description: 'AA compliant against white and blue.1',
    },
    '5': {
      value: '#1249C4',
      type: 'color',
      description: 'AA compliant against white and blue.1',
    },
  },
  teal: {
    '1': {
      value: '#d1faf0',
      type: 'color',
    },
    '2': {
      value: '#8ef4da',
      type: 'color',
    },
    '3': {
      value: '#1de9b6',
      type: 'color',
    },
    '4': {
      value: '#00C6A2',
      type: 'color',
    },
    '5': {
      value: '#0C7D61',
      type: 'color',
      description: 'AA compliant against white and teal.1',
    },
  },
  purple: {
    '1': {
      value: '#f3eaff',
      type: 'color',
    },
    '2': {
      value: '#dbc1ff',
      type: 'color',
    },
    '3': {
      value: '#b784ff',
      type: 'color',
    },
    '4': {
      value: '#9347ff',
      type: 'color',
    },
    '5': {
      value: '#6c28cc',
      type: 'color',
      description: 'AA compliant against white and purple.1',
    },
  },
  neutral: {
    '1': {
      value: '#ffffff',
      type: 'color',
    },
    '2': {
      value: '#F4F8FF',
      type: 'color',
    },
    '3': {
      value: '#686BB3',
      type: 'color',
      description: 'AA compliant against white',
    },
    '4': {
      value: '#1B214F',
      type: 'color',
    },
    '5': {
      value: '#111530',
      type: 'color',
      description: 'AA compliant against white',
    },
  },
  transparent: {
    default: {
      '1': {
        value: 'rgba(84,94,255,0)',
        type: 'color',
      },
      '2': {
        value: 'rgba(84,94,255,0.06)',
        type: 'color',
      },
      '3': {
        value: 'rgba(84,94,255,0.14)',
        type: 'color',
      },
      '4': {
        value: 'rgba(84,94,255,0.24)',
        type: 'color',
      },
      '5': {
        value: 'rgba(26,30,95,0.40)',
        type: 'color',
        description: 'AA compliant against white',
      },
    },
    alt: {
      '1': {
        value: 'rgba(255,255,255,0)',
        type: 'color',
      },
      '2': {
        value: 'rgba(255,255,255,0.06)',
        type: 'color',
      },
      '3': {
        value: 'rgba(255,255,255,0.14)',
        type: 'color',
      },
      '4': {
        value: 'rgba(255,255,255,0.24)',
        type: 'color',
      },
      '5': {
        value: 'rgba(255,255,255,0.40)',
        type: 'color',
        description: 'AA compliant against white',
      },
    },
  },
} as const;

export default colors;
