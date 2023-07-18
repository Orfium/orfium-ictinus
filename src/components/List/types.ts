import { SelectOption } from 'components/Select';

export type ListItemType = SelectOption;

export type ListRowSize = 'small' | 'normal';

export type SelectHandlerType = (option: ListItemType) => void;
