type FunctionProps = {
  children: () => React.ReactNode;
};
export const Function = ({ children }: FunctionProps) => children();
/** URL currently used for figma version 4.5 frozen */
export const FIGMA_URL =
  'https://www.figma.com/file/8kMPBNYHHXz2AtkzeeDmk5/Design-System-V5.0---Working-File';
