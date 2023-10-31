import React from 'react';
import { ComponentSizes } from 'types';

// @TODO this needs to be used on Select/Filter level now to have such functionality
// import Highlighter from 'react-highlight-words';

/** For this amount of List Items the list of Filter will be non-virtualized */
export const MAX_NON_VIRTUALIZED_ITEMS_FILTER = 6;
export const MAX_NON_VIRTUALIZED_ITEMS_SELECT = 5;

export const LIST_ITEM_HEIGHT: Record<ComponentSizes, number> = {
  compact: 40,
  normal: 52,
};
