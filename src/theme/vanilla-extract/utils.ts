import { parseToken, type Token } from '../tokens/utils';

// Helper function to check if an object is a token (has value property)
export const isToken = (obj: any): obj is { value: any } => {
  return obj && typeof obj === 'object' && 'value' in obj && typeof obj.value !== 'object';
};

// Recursively extract values from deeply nested token structures
export const extractValuesRecursively = (obj: any): any => {
  if (isToken(obj)) {
    return parseToken(obj as Token);
  }

  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = extractValuesRecursively(value);
    }

    return result;
  }

  return obj;
};

// Type-safe recursive extraction that preserves structure for TypeScript
export type ExtractStructureRecursively<T> = {
  [K in keyof T]: T[K] extends { value: infer V }
    ? V
    : T[K] extends Record<string, any>
      ? ExtractStructureRecursively<T[K]>
      : T[K];
};
