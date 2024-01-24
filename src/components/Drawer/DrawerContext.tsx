import { createContext, useContext } from 'react';

export type DrawerContextState = {
  hasFixedLayout?: boolean;
  onClose?: () => void;
};

export const DrawerContext = createContext<DrawerContextState>(null);

export const useDrawerContext = () => useContext(DrawerContext);
