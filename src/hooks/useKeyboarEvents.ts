import { useKeyboard } from '@react-aria/interactions';
import { KeyboardEvent } from 'react';

const KEYBOARD_EVENT_KEYS = {
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
      onArrowDown?: (e: KeyboardEvent) => void;
      onEscape?: () => void;
      onEnter?: (text: string) => void;
      onAlphaNumerical?: () => void;
      onBackspace?: (text: string) => void;
      onArrowMove?: (text: string, direction: KeyboardArrowHorizontalDirection) => void;
    };
  };
};
const useKeyboarEvents = ({ events: { keydown } }: Props) => {
  const { keyboardProps } = useKeyboard({
    onKeyDown: (event) => {
      const target = event.target as HTMLInputElement;
      const text = target.value;
      switch (event.key) {
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
          keydown.onEnter && keydown.onEnter(text);
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

export default useKeyboarEvents;
