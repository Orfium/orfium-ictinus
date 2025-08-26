import { ChangeEvent } from '../../utils/common';
interface Props {
    event: ChangeEvent;
    isSearchable: boolean;
    setSearchValue: (value: string) => void;
    isAsync: boolean;
    onChange: (value: string) => void;
    minCharactersToSearch?: number;
}
export declare const handleSearch: ({ event, isSearchable, setSearchValue, isAsync, onChange, minCharactersToSearch, }: Props) => void;
export default handleSearch;
