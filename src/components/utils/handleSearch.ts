import type { ChangeEvent } from 'utils/common';

interface Props {
  event: ChangeEvent;
  isSearchable: boolean;
  setSearchValue: (value: string) => void;
  isAsync: boolean;
  onChange: (value: string) => void;
  minCharactersToSearch?: number;
}
export const handleSearch = ({
  event,
  isSearchable,
  setSearchValue,
  isAsync,
  onChange,
  minCharactersToSearch = 0,
}: Props) => {
  const { target: { value }} = event;

  if (isSearchable) {
    setSearchValue(value);
  }

  if (isAsync) {
    event.persist();

    if (minCharactersToSearch && value.length && value.length < minCharactersToSearch) {
      return;
    }

    onChange(value.trim());
  }
}

export default handleSearch;
