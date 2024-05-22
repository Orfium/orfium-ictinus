import type { TableRow } from './types';
import Typography from 'components/Typography';

export type SimpleData = {
  firstName: string;
  lastName: string;
  age: string;
  job: string;
};

export const simpleColumns = [
  { id: 'firstName', header: 'First Name' },
  { id: 'lastName', header: 'Last Name' },
  { id: 'age', header: 'Age' },
  { id: 'job', header: 'Job' },
];

export const groupedColumns = [
  {
    id: 'personalDetails',
    header: 'Personal Details',
    columns: [
      { id: 'firstName', header: 'First Name' },
      { id: 'lastName', header: 'Last Name' },
    ],
  },
  { id: 'age', header: 'Age' },
  { id: 'job', header: 'Job' },
];

const getDetails = (name: string) => {
  {
    return (
      <div css={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Typography variant="label01">Famous Quotes</Typography>
        <Typography type="active" isItalic>
          {quotes[name][1]}
        </Typography>
        <Typography type="active" isItalic>
          {quotes[name][2]}
        </Typography>
        <Typography type="active" isItalic>
          {quotes[name][3]}
        </Typography>
      </div>
    );
  }
};

const quotes = {
  rachel: {
    1: "It's like all my life everyone has always told me, 'You're a shoe! You're a shoe! You're a shoe!' Well, what if I don't want to be a shoe? What if I want to be a purse, you know, or a hat!",
    2: 'I got off the plane.',
    3: 'Oh, you know what? I am gonna go get one of those job things.',
  },
  ross: {
    1: 'We were on a break!',
    2: 'Pivot! Pivot! Pivot!',
    3: 'Hi, I’m Ross. I’m divorced, and I have a son.',
  },
  monica: {
    1: 'Welcome to the real world! It sucks. You’re gonna love it.',
    2: 'I KNOW!',
    3: 'Rules are good! Rules help control the fun!',
  },
  chandler: {
    1: 'Could I BE any more...?',
    2: 'I’m not great at the advice. Can I interest you in a sarcastic comment?',
    3: 'I say more dumb things before 9 a.m. than most people say all day.',
  },
  joey: {
    1: "How you doin'?",
    2: 'Joey doesn’t share food!',
    3: "It's a moo point. It's like a cow's opinion; it doesn't matter. It's moo.",
  },
  phoebe: {
    1: 'Smelly Cat, Smelly Cat, what are they feeding you?',
    2: 'Oh, I wish I could, but I don’t want to.',
    3: 'They don’t know that we know they know we know.',
  },
};

export const simpleData = (isDetailed?: boolean): TableRow<SimpleData>[] => [
  {
    cells: {
      firstName: 'Rachel',
      lastName: 'Berry',
      age: '30',
      job: 'Fashion Executive',
    },
    ...(isDetailed && { details: getDetails('rachel') }),
  },
  {
    cells: {
      firstName: 'Ross',
      lastName: 'Geller',
      age: '32',
      job: 'Paleontologist',
    },
    ...(isDetailed && { details: getDetails('ross') }),
  },
  {
    cells: { firstName: 'Monica', lastName: 'Geller', age: '31', job: 'Chef' },
    ...(isDetailed && { details: getDetails('monica') }),
  },
  {
    cells: { firstName: 'Chandler', lastName: 'Bing', age: '32', job: '?' },
    ...(isDetailed && { details: getDetails('chandler') }),
  },
  {
    cells: {
      firstName: 'Joey',
      lastName: 'Tribbiani',
      age: '30',
      job: 'Actor',
    },
    ...(isDetailed && { details: getDetails('joey') }),
  },
  {
    cells: {
      firstName: 'Phoebe',
      lastName: 'Buffay',
      age: '31',
      job: 'Massage Therapist',
    },
    ...(isDetailed && { details: getDetails('phoebe') }),
  },
];

export const moreData = [
  {
    cells: {
      firstName: 'Gunther',
      lastName: 'N/A',
      age: '35',
      job: 'Central Perk Manager',
    },
  },
  {
    cells: {
      firstName: 'Janice',
      lastName: 'Litman-Foralnik',
      age: '35',
      job: 'Personal Shopper',
    },
  },
  {
    cells: {
      firstName: 'Richard',
      lastName: 'Burke',
      age: '50',
      job: 'Ophthalmologist',
    },
  },
  {
    cells: {
      firstName: 'Estelle',
      lastName: 'Leonard',
      age: 'N/A',
      job: 'Talent Agent',
    },
  },
  {
    cells: {
      firstName: 'Mike',
      lastName: 'Hannigan',
      age: '31',
      job: 'N/A',
    },
  },
  {
    cells: {
      firstName: 'Charlie',
      lastName: 'Wheeler',
      age: '28',
      job: 'Paleontologist',
    },
  },
  {
    cells: {
      firstName: 'Emily',
      lastName: 'Waltham',
      age: '28',
      job: 'N/A',
    },
  },
  {
    cells: {
      firstName: 'Carol',
      lastName: 'Willick',
      age: '35',
      job: 'N/A',
    },
  },
  {
    cells: {
      firstName: 'Frank',
      lastName: 'Buffay Jr.',
      age: '29',
      job: 'N/A',
    },
  },
];
