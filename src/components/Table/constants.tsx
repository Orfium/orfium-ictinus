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

export const moreData = [
  {
    firstName: 'Gunther',
    lastName: 'N/A',
    age: '35',
    job: 'Central Perk Manager',
  },
  {
    firstName: 'Janice',
    lastName: 'Litman-Foralnik',
    age: '35',
    job: 'Personal Shopper',
  },
  {
    firstName: 'Richard',
    lastName: 'Burke',
    age: '50',
    job: 'Ophthalmologist',
  },
  {
    firstName: 'Estelle',
    lastName: 'Leonard',
    age: 'N/A',
    job: 'Talent Agent',
  },
  {
    firstName: 'Mike',
    lastName: 'Hannigan',
    age: '31',
    job: 'N/A',
  },
  {
    firstName: 'Charlie',
    lastName: 'Wheeler',
    age: '28',
    job: 'Paleontologist',
  },
  {
    firstName: 'Emily',
    lastName: 'Waltham',
    age: '28',
    job: 'N/A',
  },
  {
    firstName: 'Carol',
    lastName: 'Willick',
    age: '35',
    job: 'N/A',
  },
  {
    firstName: 'Frank',
    lastName: 'Buffay Jr.',
    age: '29',
    job: 'N/A',
  },
];
