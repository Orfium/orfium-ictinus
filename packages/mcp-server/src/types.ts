export interface PropDefinition {
  type: string;
  description?: string;
  defaultValue?: string;
  required?: boolean;
}

export interface DeprecationInfo {
  since?: string;
  replacement?: string;
  message?: string;
}

export interface ExampleFile {
  filename: string;
  content: string;
}

export interface Example {
  title: string;
  components: string[];
  code: ExampleFile[];
}

export interface ComponentInfo {
  name: string;
  /** Unique key — includes api when both legacy and vanilla exist */
  id: string;
  description: string;
  import: string;
  /** `vanilla` = @orfium/ictinus/vanilla; `legacy` = @orfium/ictinus */
  api: 'vanilla' | 'legacy';
  category?: string[];
  deprecated?: DeprecationInfo;
  props: Record<string, PropDefinition>;
  examples?: Example[];
  sourcePath?: string;
}

export interface Guide {
  name: string;
  title: string;
  content: string;
}

export interface IconInfo {
  name: string;
  /** `vanilla` = `EditIcon` from `@orfium/ictinus/vanilla`; `legacy` = `<Icon name="edit" />` */
  api: 'vanilla' | 'legacy';
  category: string;
  keywords: string[];
  import: string;
}

export interface DesignTokens {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  sizing: Record<string, string>;
  borderRadius: Record<string, string>;
  borderWidth: Record<string, string>;
  fontSize: Record<string, string>;
  fontWeight: Record<string, string>;
  fontFamily: Record<string, string>;
  letterSpacing: Record<string, string>;
  lineHeight: Record<string, string>;
  semanticColors: Record<string, string>;
  boxShadow: Record<string, string>;
}

export interface McpData {
  generatedAt: string;
  components: Record<string, ComponentInfo>;
  guides: Record<string, Guide>;
  icons: Record<string, IconInfo>;
  tokens: DesignTokens;
}
