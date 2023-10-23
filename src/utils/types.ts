export type DeepPartial<T> = T extends { [key: string]: unknown }
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type ComponentSizes = 'compact' | 'normal';

export type TestId = string;

export type TestProps = {
  dataTestId?: TestId;
  dataTestPrefixId?: string;
};
