import { TestProps } from '../../../../../../../utils/types';
type SortingOptionProps = {
    key?: string | number;
    isDescending?: boolean;
} & TestProps;
declare const SortingOption: React.FC<SortingOptionProps>;
export default SortingOption;
