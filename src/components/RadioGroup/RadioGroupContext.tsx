import React, { ReactEventHandler } from 'react';

type DefaultContext = undefined;
type ProviderContext = {
  name: string;
  onChange: ReactEventHandler;
  value: string | number | undefined;
};

const RadioGroupContext = React.createContext<DefaultContext | ProviderContext>(undefined);

export default RadioGroupContext;
