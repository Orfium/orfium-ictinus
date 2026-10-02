export type ComponentDoc = {
  description?: string;
  displayName: string;
  props: Prop[];
  tags: {
    [key: string]: string | undefined;
    example?: string;
    extends?: string;
  };
};

export type Prop = {
  defaultValue?: { value: string } | null;
  description?: string;
  name: string;
  required?: boolean;
  type: { name: string };
};

export declare function getDocs(): ComponentDoc[];

export declare const VANILLA_PREFIX: '@orfium/ictinus/vanilla/';
export declare const LEGACY_PREFIX: '@orfium/ictinus/';

export declare function resolveApi(
  displayName: string,
): 'vanilla' | 'legacy' | null;

export declare function docsShortName(displayName: string): string;
