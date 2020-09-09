declare module '*.md';

declare module '*.svg' {
  const content: string;
  export default content;
}

type DeepPartial<T> = T extends { [key: string]: unknown }
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

type TestId = string;

type TestProps = {
  dataTestId?: TestId;
};
