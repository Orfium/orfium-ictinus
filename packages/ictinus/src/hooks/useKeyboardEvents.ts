import type { KeyboardEvent } from 'react';
import { useKeyboard } from 'react-aria';

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
          if (keydown.onArrowUp) {
            keydown.onArrowUp(event);
          }
          break;
        case KEYBOARD_EVENT_KEYS.ArrowDown:
          event.preventDefault();
          if (keydown.onArrowDown) {
            keydown.onArrowDown(event);
          }
          break;
        case KEYBOARD_EVENT_KEYS.ArrowLeft:
          if (keydown.onArrowMove) {
            keydown.onArrowMove(text, 'left');
          }
          break;
        case KEYBOARD_EVENT_KEYS.ArrowRight:
          if (keydown.onArrowMove) {
            keydown.onArrowMove(text, 'right');
          }
          break;
        case KEYBOARD_EVENT_KEYS.Escape:
          if (keydown.onEscape) {
            keydown.onEscape();
          }
          break;
        case KEYBOARD_EVENT_KEYS.Enter:
          if (keydown.onEnter) {
            keydown.onEnter(event);
          }
          break;
        case KEYBOARD_EVENT_KEYS.Backspace:
          if (keydown.onBackspace) {
            keydown.onBackspace(text);
          }
          break;
      }

      // detect letters, numbers and symbols only
      const regex = /^(?!Shift$)[a-zA-Z0-9\s\S]$/;
      const isMatched = regex.test(event.key);
      if (isMatched) {
        if (keydown.onAlphaNumerical) {
          keydown.onAlphaNumerical();
        }
      }
    },
  });

  return {
    keyboardProps,
  };
};

export default useKeyboardEvents;
