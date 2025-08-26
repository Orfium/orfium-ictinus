import { KEYBOARD_EVENT_KEYS } from '../../hooks/useKeyboardEvents';
import { Dayjs } from '../../utils/date';
import { Range } from './OverlayComponent/OverlayComponent';
export declare const currentDay: Dayjs;
export declare const initDates: (value: {
    from?: Date;
    to?: Date;
}) => Range;
export declare const clickOnElement: (element: HTMLElement, key: string, charCode: number) => boolean;
export declare const navigateOnElement: (element: HTMLElement, path: (keyof typeof KEYBOARD_EVENT_KEYS)[]) => void;
