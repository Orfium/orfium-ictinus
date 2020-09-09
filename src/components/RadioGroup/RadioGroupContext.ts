import * as React from 'react';

type DefaultContext = undefined;
type ProviderContext = {
  name: string;
  onChange: React.ReactEventHandler;
  value: string | number | undefined;
};

const RadioGroupContext = React.createContext<DefaultContext | ProviderContext>(undefined);

export default RadioGroupContext;
