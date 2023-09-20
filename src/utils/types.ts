import { FC, PropsWithChildren } from 'react';
export type DeepPartial<T> = T extends { [key: string]: unknown }
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type TestId = string;

export type TestProps = {
  dataTestId?: TestId;
  dataTestPrefixId?: string;
};

export type ReactFCC<T = unknown> = FC<PropsWithChildren<T>>;
