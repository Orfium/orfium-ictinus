declare module '*.md';

declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  export { ReactComponent };
}
