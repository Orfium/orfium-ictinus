export type Token = {
  value: string;
  type: string;
  description?: string;
};

export type TokensObject = {
  [index: string]: string | TokensObject;
};

/**
 * This generic type to convert an object to a dot notation string deeply while ignoring `value` properties at the end
 * Key paths of figma tokens objects usually used are declared in the following directories:
 *
 * src/theme/globals/constants/*
 * src/theme/tokens/<theme>/variables/*
 * src/theme/tokens/components/variables/*
 *
 * This is needed for all the getToken callbacks to make sure that
 * all the requested paths return a Token (with value/type/description)
 *
 * @example
 * ```
 * const avatar = {
 *     color: {
 *         red: {
 *             backgroundColor: {
 *                 value: 'test'
 *             }
 *         }
 *     },
 *     size: {
 *         1: {
 *             value: 'test'
 *         }
 *     }
 * } as const;
 *
 * type AvatarKeys = DotKeys<typeof avatar>;
 * ```
 *
 * the above produces
 * ```
 * type AvatarKeys = "color.red.backgroundColor" | "size.1"
 * ```
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
