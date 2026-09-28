import type { TextAreaProps as PrimitiveTextAreaProps } from 'react-aria-components';
import { TextArea as PrimitiveTextArea } from 'react-aria-components';

import type { Sprinkles } from '../../sprinkles';
import { cn } from '../../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../Box';
import { input } from '../TextField/TextField.css';
import * as styles from './TextArea.css';

type BoxCompatibleProps<P> = Omit<P, keyof Sprinkles | 'className'>;

export type TextAreaProps = BoxProps<'textarea', BoxCompatibleProps<PrimitiveTextAreaProps>>;

const TextArea = (props: TextAreaProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <PrimitiveTextArea
        className={cn(input({ type: 'normal' }), styles.textArea, boxProps.className)}
        {...restProps}
      />
    </Box>
  );
};

export { TextArea };

export default TextArea;
