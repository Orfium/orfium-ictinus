import Button from '../../Button';
import Icon from '../../Icon';
import React from 'react';
import { MatchingAction } from '../types';

export const createActionButton = (type: 'primary' | 'secondary') => (action: MatchingAction) => (
  <Button
    type={type}
    iconLeft={<Icon color={'inherit'} name={action.icon} />}
    filled={false}
    onClick={action?.onClick}
  >
    {action.text}
  </Button>
);
