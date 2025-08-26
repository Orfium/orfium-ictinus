import { FC } from 'react';
import { TagProps } from '../../../components/Tag';
type Props = Pick<TagProps, 'color' | 'size' | 'iconName'> & {
    text: string;
    type: 'read-only' | 'clearable' | 'selectable';
};
declare const TagShowcase: FC<Props>;
export default TagShowcase;
