import type { FC, PropsWithChildren } from 'react';

declare module 'react' {
  type FCC<T = Record<string, unknown>> = FC<PropsWithChildren<T>>;
}
