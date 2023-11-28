import { useKeyboard } from '@react-aria/interactions';
import type { KeyboardEvent } from 'react';

export const KEYBOARD_EVENT_KEYS = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowRight: 'ArrowRight',
  ArrowLeft: 'ArrowLeft',
  Escape: 'Escape',
  Enter: 'Enter',
  Backspace: 'Backspace',
  AlphaNumerical: 'AlphaNumerical',
};
export type KeyboardArrowHorizontalDirection = 'left' | 'right';

type Props = {
  events: {
    keydown: {
      onArrowUp?: (e: KeyboardEvent) => void;
      onArrowDown?: (e: KeyboardEvent) => void;
      onEscape?: () => void;
      onEnter?: (e: KeyboardEvent) => void;
      onAlphaNumerical?: () => void;
      onBackspace?: (text: string) => void;
      onArrowMove?: (text: string, direction: KeyboardArrowHorizontalDirection) => void;
    };
  };
  hasPropagation?: boolean;
};
const useKeyboardEvents = ({ events: { keydown }, hasPropagation = false }: Props) => {
  const { keyboardProps } = useKeyboard({
    onKeyDown: (event) => {
      if (hasPropagation) {
        event.continuePropagation();
      }
      const target = event.target as HTMLInputElement;
      const text = target.value;
      switch (event.key) {
        case KEYBOARD_EVENT_KEYS.ArrowUp:
          event.preventDefault();
          keydown.onArrowUp && keydown.onArrowUp(event);
          break;
        case KEYBOARD_EVENT_KEYS.ArrowDown:
          event.preventDefault();
          keydown.onArrowDown && keydown.onArrowDown(event);
          break;
        case KEYBOARD_EVENT_KEYS.ArrowLeft:
          keydown.onArrowMove && keydown.onArrowMove(text, 'left');
          break;
        case KEYBOARD_EVENT_KEYS.ArrowRight:
          keydown.onArrowMove && keydown.onArrowMove(text, 'right');
          break;
        case KEYBOARD_EVENT_KEYS.Escape:
          keydown.onEscape && keydown.onEscape();
          break;
        case KEYBOARD_EVENT_KEYS.Enter:
          keydown.onEnter && keydown.onEnter(event);
          break;
        case KEYBOARD_EVENT_KEYS.Backspace:
          keydown.onBackspace && keydown.onBackspace(text);
          break;
      }

      // detect letters, numbers and symbols only
      const regex = /^(?!Shift$)[a-zA-Z0-9\s\S]$/;
      const isMatched = regex.test(event.key);
      if (isMatched) {
        keydown.onAlphaNumerical && keydown.onAlphaNumerical();
      }
    },
  });

  return {
    keyboardProps,
  };
};

export default useKeyboardEvents;
