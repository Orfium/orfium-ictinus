import React, { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';

const SelectedItemContext = createContext<[string | null, Dispatch<SetStateAction<string | null>>]>(
  [null, () => void 0]
);

export const useSelectedItem = () => useContext(SelectedItemContext);

const SelectedItemProvider: FC = ({ children }) => {
  const state = useState<string | null>(null);

  return <SelectedItemContext.Provider value={state}>{children}</SelectedItemContext.Provider>;
};

export default SelectedItemProvider;
