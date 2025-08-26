import { KeyboardEvent } from 'react';
export declare const KEYBOARD_EVENT_KEYS: {
    ArrowUp: string;
    ArrowDown: string;
    ArrowRight: string;
    ArrowLeft: string;
    Escape: string;
    Enter: string;
    Backspace: string;
    AlphaNumerical: string;
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
declare const useKeyboardEvents: ({ events: { keydown }, hasPropagation }: Props) => {
    keyboardProps: import('@react-types/shared').DOMAttributes<import('@react-types/shared').FocusableElement>;
};
export default useKeyboardEvents;
