import { FCC, default as React } from 'react';
export type SearchProps = {
    searchPlaceholder: string;
    searchDefaultValue: string;
    onSearchHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPressHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    isSearchDisabled?: boolean;
} & {
    isDark?: boolean;
};
declare const Search: FCC<SearchProps>;
export default Search;
