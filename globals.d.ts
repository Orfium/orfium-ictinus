declare module '*.md';

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
