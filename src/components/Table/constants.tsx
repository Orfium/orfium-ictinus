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

export const simpleData = [
  {
    firstName: 'Rachel',
    lastName: 'Berry',
    age: '30',
    job: 'Fashion Executive',
  },
  {
    firstName: 'Ross',
    lastName: 'Geller',
    age: '32',
    job: 'Paleontologist',
  },
  { firstName: 'Monica', lastName: 'Geller', age: '31', job: 'Chef' },
  { firstName: 'Chandler', lastName: 'Bing', age: '32', job: '?' },
  {
    firstName: 'Joey',
    lastName: 'Tribbiani',
    age: '30',
    job: 'Actor',
  },
  {
    firstName: 'Phoebe',
    lastName: 'Buffay',
    age: '31',
    job: 'Massage Therapist',
  },
];
