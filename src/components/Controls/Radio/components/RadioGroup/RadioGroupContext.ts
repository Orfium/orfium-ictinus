import React from 'react';
import { RadioGroupState } from 'react-stately';

export const RadioContext = React.createContext<RadioGroupState | null>(null);

export const useRadioGroupContent = () => React.useContext(RadioContext);
