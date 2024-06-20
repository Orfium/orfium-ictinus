/* eslint-disable @typescript-eslint/naming-convention */
import type { SortingState } from '@tanstack/react-table';

import type { TableColumn, TableRow } from './types';
import Tag from '../Tag';
import Typography from 'components/Typography';

export const ACTIONS_CELL_WIDTH = 52;
export const ACTIONS_BAR_HEIGHT = 44;

export type SimpleData = {
  firstName: string;
  lastName: string | undefined;
  age: number | undefined;
  job: string | undefined | JSX.Element;
};

export const contentAlignOptions = ['left', 'center', 'right'];

export const simpleColumns: TableColumn<SimpleData>[] = [
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
        {Object.keys(quotes[name]).map((__, index) => (
          <Typography key={index} type="active" isItalic>
            {quotes[name][index + 1]}
          </Typography>
        ))}
      </div>
    );
  }
};

export const sortDataByKey = (data, key, order = 'asc') => {
  const returnData = [...data];

  return returnData.sort((a, b) => {
    const valueA = a.cells[key];
    const valueB = b.cells[key];

    const comparison =
      key === 'age'
        ? parseInt(valueA, 10) - parseInt(valueB, 10)
        : valueA < valueB
        ? -1
        : valueA > valueB
        ? 1
        : 0;

    return order === 'desc' ? -comparison : comparison;
  });
};

export const sortedData = (data, sorting: SortingState) => {
  const { id = undefined, desc = undefined } = sorting?.length ? sorting[0] : {};

  if (id) {
    return sortDataByKey(data, id, desc ? 'desc' : 'asc');
  } else {
    return data;
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
  gunther: {
    1: 'I love you...in a really, really big, pretend-to-like-your-taste-in-music, let-you-eat-the-last-piece-of-cheesecake, hold-a-radio-over-my-head-outside-your-window, unfortunate way that makes me hate you, love you.',
  },
  janice: { 1: 'Oh. My. God.' },
  richard: {
    1: 'You know, I see what you are doing. You are just pointing out all the things that are wrong with me.',
  },
  estelle: { 1: 'Acting is weird' },
  mike: {
    1: 'I’d rather be with you in an ordinary life than without you in an extraordinary one.',
  },
  charlie: {
    1: 'This is so humiliating. You would never see this at Princeton. You would see it at Yale, but never at Princeton.',
  },
  emily: {
    1: 'My name is Emily Waltham. Emily, as in Emily Dickinson. Waltham, as in Waltham, Massachusetts. And I have never met you before in my life.',
  },
  carol: { 1: 'Fine by me!' },
  frank: { 1: 'Can you believe it? Three babies! I mean, it’s like a dream come true.' },
  barry: { 1: 'Well, at least she had the chance to leave a man at the altar.' },
  mrHeckles: { 1: 'You are disturbing my oboe practice.' },
  tag: { 1: 'Im the king of bad birthday presents.' },
  pete: { 1: 'I want to be the Ultimate Fighting Champion.' },
  paul: {
    1: 'Hey, I was young once too. I remember I used to sneak around, having fun, getting into trouble.',
  },
};

export const simpleData = (isDetailed?: boolean): TableRow<SimpleData>[] => [
  {
    cells: {
      firstName: 'Rachel',
      lastName: 'Berry',
      age: 30,
      job: <Tag>Fashion Executive</Tag>,
    },
    ...(isDetailed && { details: getDetails('rachel') }),
  },
  {
    cells: {
      firstName: 'Ross',
      lastName: 'Geller',
      age: 32,
      job: <Tag>Paleontologist</Tag>,
    },
    ...(isDetailed && { details: getDetails('ross') }),
  },
  {
    cells: { firstName: 'Monica', lastName: 'Geller', age: 31, job: <Tag>Chef</Tag> },
    ...(isDetailed && { details: getDetails('monica') }),
  },
  {
    cells: { firstName: 'Chandler', lastName: 'Bing', age: 32, job: <Tag>?</Tag> },
    ...(isDetailed && { details: getDetails('chandler') }),
  },
  {
    cells: {
      firstName: 'Joey',
      lastName: 'Tribbiani',
      age: 30,
      job: <Tag>Actor</Tag>,
    },
    ...(isDetailed && { details: getDetails('joey') }),
  },
  {
    cells: {
      firstName: 'Phoebe',
      lastName: 'Buffay',
      age: 31,
      job: <Tag>Massage Therapist</Tag>,
    },
    ...(isDetailed && { details: getDetails('phoebe') }),
  },
];

export const moreData = (isDetailed?: boolean): TableRow<SimpleData>[] => [
  {
    cells: {
      firstName: 'Gunther',
      lastName: undefined,
      age: 35,
      job: <Tag>Central Perk Manager</Tag>,
    },
    ...(isDetailed && { details: getDetails('gunther') }),
  },
  {
    cells: {
      firstName: 'Janice',
      lastName: 'Litman-Foralnik',
      age: 35,
      job: <Tag>Personal Shopper</Tag>,
    },
    ...(isDetailed && { details: getDetails('janice') }),
  },
  {
    cells: {
      firstName: 'Richard',
      lastName: 'Burke',
      age: 50,
      job: <Tag>Ophthalmologist</Tag>,
    },
    ...(isDetailed && { details: getDetails('richard') }),
  },
  {
    cells: {
      firstName: 'Estelle',
      lastName: 'Leonard',
      age: undefined,
      job: <Tag>Talent Agent</Tag>,
    },
    ...(isDetailed && { details: getDetails('estelle') }),
  },
  {
    cells: {
      firstName: 'Mike',
      lastName: 'Hannigan',
      age: 31,
      job: undefined,
    },
    ...(isDetailed && { details: getDetails('mike') }),
  },
  {
    cells: {
      firstName: 'Charlie',
      lastName: 'Wheeler',
      age: 28,
      job: <Tag>Paleontologist</Tag>,
    },
    ...(isDetailed && { details: getDetails('charlie') }),
  },
  {
    cells: {
      firstName: 'Emily',
      lastName: 'Waltham',
      age: 28,
      job: undefined,
    },
    ...(isDetailed && { details: getDetails('emily') }),
  },
  {
    cells: {
      firstName: 'Carol',
      lastName: 'Willick',
      age: 35,
      job: undefined,
    },
    ...(isDetailed && { details: getDetails('carol') }),
  },
  {
    cells: {
      firstName: 'Frank',
      lastName: 'Buffay Jr.',
      age: 29,
      job: undefined,
    },
    ...(isDetailed && { details: getDetails('frank') }),
  },
  {
    cells: {
      firstName: 'Barry',
      lastName: 'Farber',
      age: 30,
      job: <Tag>Orthodontist</Tag>,
    },
    ...(isDetailed && { details: getDetails('barry') }),
  },
  {
    cells: {
      firstName: 'Mr. Heckles',
      lastName: undefined,
      age: 60,
      job: <Tag>Retired</Tag>,
    },
    ...(isDetailed && { details: getDetails('mrHeckles') }),
  },
  {
    cells: {
      firstName: 'Tag',
      lastName: 'Jones',
      age: 24,
      job: <Tag>Assistant</Tag>,
    },
    ...(isDetailed && { details: getDetails('tag') }),
  },
  {
    cells: {
      firstName: 'Pete',
      lastName: 'Becker',
      age: 32,
      job: <Tag>Software Engineer</Tag>,
    },
    ...(isDetailed && { details: getDetails('pete') }),
  },
  {
    cells: {
      firstName: 'Paul',
      lastName: 'Stevens',
      age: 50,
      job: <Tag>Lawyer</Tag>,
    },
    ...(isDetailed && { details: getDetails('paul') }),
  },
];

export const contentAlignToFlex = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};
