declare module '*.md';
declare module 'babel-plugin-require-context-hook/register';

declare module '*.svg?react' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}
