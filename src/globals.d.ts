type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

type TestId = string;

type TestProps = {
  dataTestId?: TestId;
};
