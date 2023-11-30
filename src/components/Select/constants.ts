import type { SelectOption } from './types';

export const SELECT_ALL_OPTION: SelectOption = {
  value: 'select_all',
  label: 'Select All',
} as const;

/** Stories */

export const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'banana', label: 'Banana' },
  { value: 'citrus2', label: 'Citrus2' },
  { value: 'citrus3', label: 'Citrus3' },
  { value: 'citrus4', label: 'Citrus4' },
  { value: 'vanilla', label: 'Vanilla', isDisabled: true },
];

export const optionsWithHelperInDisabled = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'banana', label: 'Banana' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'why_Disabled', label: 'Why Disabled?', helperText: 'this is why!', isDisabled: true },
];

export const groupOptions = [
  {
    value: 'Sweet',
    label: 'Sweets',
    options: [
      { value: '1', label: 'Chocolate' },
      { value: '2', label: 'Option 2' },
    ],
  },
  {
    value: 'Sour',
    label: 'Sour',
    options: [{ value: '3', label: 'Option 3' }],
  },
  { value: '4', label: 'Option 4' },
  {
    value: 'group5',
    label: 'Group 5',
    options: [
      { value: '5', label: 'Option 7' },
      { value: '6', label: 'Option 8' },
    ],
  },
  {
    value: 'group6',
    label: 'Group 6',
    options: [{ value: '7', label: 'Option 9' }],
  },
];

export const defaultValue = options[0];
