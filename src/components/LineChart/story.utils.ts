export const initData = [
  {
    name: 'Aug 1',
    hidden: 200,
    claimed: 40,
    amt: 240,
  },
  {
    name: 'Aug 2',
    hidden: 120,
    claimed: 20,
    amt: 210,
  },
  {
    name: 'Aug 3',
    hidden: 79,
    claimed: 38,
  },
  {
    name: 'Aug 4',
    hidden: 167,
    claimed: 22,
    amt: 40,
  },
  {
    name: 'Aug 5',
    hidden: 179,
    claimed: 33,
    amt: 81,
  },
  {
    name: 'Aug 6',
    hidden: 61,
    claimed: 5,
    amt: 250,
  },
  {
    name: 'Aug 7',
    hidden: 211,
    claimed: 45,
    amt: 100,
  },
];

export const color = (dataLabel: string) => {
  if (dataLabel === 'hidden') {
    return 'darkBlue';
  }
  if (dataLabel === 'claimed') {
    return 'orange';
  }
  if (dataLabel === 'amt') {
    return 'red';
  }

  return '';
};
