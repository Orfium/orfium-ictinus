import type { Dispatch, FCC } from 'react';
import React, { createContext, useContext } from 'react';

const SET_HAS_FIXED_LAYOUT = 'SET_HAS_FIXED_LAYOUT';
const SET_ON_CLOSE = 'SET_ON_CLOSE';
const TOGGLE_IS_SCROLLBAR_ON_TOP = 'TOGGLE_IS_SCROLLBAR_ON_TOP';
const TOGGLE_IS_SCROLLBAR_ON_BOTTOM = 'TOGGLE_IS_SCROLLBAR_ON_BOTTOM';

export type DrawerContextState = {
  hasFixedLayout?: boolean;
  onClose?: () => void;
  isScrollbarOnTop?: boolean;
  isScrollbarOnBottom?: boolean;
};

export type DrawerContextAction = {
  type:
    | typeof SET_HAS_FIXED_LAYOUT
    | typeof SET_ON_CLOSE
    | typeof TOGGLE_IS_SCROLLBAR_ON_BOTTOM
    | typeof TOGGLE_IS_SCROLLBAR_ON_TOP;
  payload: any;
};

export const setHasFixedLayout = (payload): DrawerContextAction => {
  return {
    type: SET_HAS_FIXED_LAYOUT,
    payload,
  };
};

export const setOnClose = (payload): DrawerContextAction => {
  return {
    type: SET_ON_CLOSE,
    payload,
  };
};

export const toggleIsScrollbarOnTop = (payload): DrawerContextAction => {
  return {
    type: TOGGLE_IS_SCROLLBAR_ON_TOP,
    payload,
  };
};

export const toggleIsScrollbarOnBottom = (payload): DrawerContextAction => {
  return {
    type: TOGGLE_IS_SCROLLBAR_ON_BOTTOM,
    payload,
  };
};

export const DrawerContext =
  createContext<[DrawerContextState, Dispatch<DrawerContextAction>]>(null);

const reducer = (state: DrawerContextState, action: DrawerContextAction) => {
  switch (action.type) {
    case SET_HAS_FIXED_LAYOUT:
      return {
        ...state,
        hasFixedLayout: action.payload,
      };
    case SET_ON_CLOSE:
      return {
        ...state,
        onClose: action.payload,
      };
    case TOGGLE_IS_SCROLLBAR_ON_TOP:
      return {
        ...state,
        isScrollbarOnTop: action.payload,
      };
    case TOGGLE_IS_SCROLLBAR_ON_BOTTOM:
      return {
        ...state,
        isScrollbarOnBottom: action.payload,
      };
    default:
      return state;
  }
};

export type DrawerContextReducer = (
  state: DrawerContextState,
  action: DrawerContextAction
) => DrawerContextState;

export const DrawerContextProvider: FCC<{ hasFixedLayout?: boolean; onClose: () => void }> = ({
  hasFixedLayout = false,
  onClose = () => null,
  children,
}) => {
  const [state, dispatch] = React.useReducer<DrawerContextReducer>(reducer, {
    hasFixedLayout,
    onClose,
    isScrollbarOnTop: false,
    isScrollbarOnBottom: false,
  });

  return <DrawerContext.Provider value={[state, dispatch]}>{children}</DrawerContext.Provider>;
};

export const useDrawerContext = () => useContext(DrawerContext);
