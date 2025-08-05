export const borderRadius = {
  '0': '0px' as const,
  '1': '2px' as const,
  '2': '4px' as const,
  '3': '8px' as const,
  '4': '16px' as const,
  '5': '36px' as const,
  '6': '48px' as const,
  '7': 'calc(infinity * 1px)' as const,
} as const;

export type BorderRadius = keyof typeof borderRadius;
