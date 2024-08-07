import type { FC, PropsWithChildren } from 'react';

declare module 'react' {
  type FCC<T = Record<string, unknown>> = FC<PropsWithChildren<T>>;
}

declare module '*.json';

// bypass jest warnings
declare global {
  namespace jest {
    type SnapshotSerializerPlugin = any;
    interface ExpectExtendMap {
      [key: string]: any;
    }
  }
}
