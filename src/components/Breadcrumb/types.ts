export type BreadcrumbItemData = {
  /** Defines the path used for a link breadcrumb item*/
  to: string;
  /** Defines the label used for a link breadcrumb item */
  label: string;
  /** Defines the options used to render a Menu button */
  options?: string[];
  /** Defines the method where a developer can manipulate the selection of an menu item */
  onChangeHandler: (selectedItem: string) => void;
};
