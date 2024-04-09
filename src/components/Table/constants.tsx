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

export const simpleData = [
  { cells: { firstName: 'Rachel', lastName: 'Berry', age: '30', job: 'Fashion Executive' } },
  { cells: { firstName: 'Ross', lastName: 'Geller', age: '32', job: 'Paleontologist' } },
  { cells: { firstName: 'Monica', lastName: 'Geller', age: '31', job: 'Chef' } },
  { cells: { firstName: 'Chandler', lastName: 'Bing', age: '32', job: '?' } },
  { cells: { firstName: 'Joey', lastName: 'Tribbiani', age: '30', job: 'Actor' } },
  { cells: { firstName: 'Phoebe', lastName: 'Buffay', age: '31', job: 'Massage Therapist' } },
];
