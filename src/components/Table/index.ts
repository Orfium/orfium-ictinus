export { default } from './Table';
export * from './components';
export * from './hooks';
export * from './types';

/** This util is necessary to get the new state when using state callbacks. Check documentation for more info */
export { functionalUpdate as tableFunctionalUpdate } from '@tanstack/react-table';
