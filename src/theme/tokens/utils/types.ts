export type Token = {
  value: string;
  type: string;
  description?: string;
};

export type TokensObject = {
  [index: string]: string | TokensObject;
};

/** This generic type produces a type that equals all the nested key paths of a
 * figma tokens object (declared in the following directories):
 *
 * src/theme/globals/constants/*
 * src/theme/tokens/semantic/variables/*
 * src/theme/tokens/components/variables/*
 *
 * This is needed for all the getToken callbacks to make sure that
 * all the requested paths return a Token (with value/type/description)
 *
 */
export type DotKeys<T> = T extends Record<string, unknown>
  ?
      | {
          [K in keyof T & string]: T[K] extends { value: unknown }
            ? `${K}`
            : `${K}${DotKeys<T[K]> extends infer S ? (S extends string ? `.${S}` : '') : ''}`;
        }[keyof T & string]
      | (keyof T extends number ? `${keyof T}` : never)
  : never;
