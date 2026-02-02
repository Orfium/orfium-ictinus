import { type Ref } from 'react';
import type {
  ListBoxItemProps,
  SectionProps,
  SeparatorProps,
  TextProps,
} from 'react-aria-components';
import {
  Collection,
  composeRenderProps,
  Header,
  ListBoxItem as ListBoxItemPrimitive,
  ListBoxSection,
  Separator,
  Text,
} from 'react-aria-components';
import { cn } from '../../utils/cn';
import * as styles from './Dropdown.css';

interface DropdownSectionProps<T> extends SectionProps<T> {
  title?: string;
}

const DropdownSection = <T extends object>({ children, ...props }: DropdownSectionProps<T>) => {
  return (
    <ListBoxSection>
      {'title' in props && <Header>{props.title}</Header>}
      <Collection items={props.items}>{children}</Collection>
    </ListBoxSection>
  );
};

type DropdownItemProps = ListBoxItemProps;

const DropdownItem = ({ children, ...props }: DropdownItemProps) => {
  const textValue = typeof children === 'string' ? children : undefined;

  return (
    <ListBoxItemPrimitive textValue={textValue} {...props}>
      {composeRenderProps(children, (children) => (
        <>{typeof children === 'string' ? <DropdownLabel>{children}</DropdownLabel> : children}</>
      ))}
    </ListBoxItemPrimitive>
  );
};

interface DropdownLabelProps extends TextProps {
  ref?: Ref<HTMLDivElement>;
}

const DropdownLabel = ({ className, ref, ...props }: DropdownLabelProps) => (
  <Text slot="label" ref={ref} className={className} {...props} />
);

interface DropdownDescriptionProps extends TextProps {
  ref?: Ref<HTMLDivElement>;
}

const DropdownDescription = ({ className, ref, ...props }: DropdownDescriptionProps) => (
  <Text slot="description" ref={ref} className={className} {...props} />
);

const DropdownSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator orientation="horizontal" className={cn(styles.separator({}), className)} {...props} />
);

/**
 * Note: This is not exposed component, but it's used in other components to render dropdowns.
 * @internal
 */
export { DropdownDescription, DropdownItem, DropdownLabel, DropdownSection, DropdownSeparator };

export type {
  DropdownDescriptionProps,
  DropdownItemProps,
  DropdownLabelProps,
  DropdownSectionProps,
};
