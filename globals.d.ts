declare module '*.md';

declare module '*.svg' {
  const content: string;
  export default content;
}
