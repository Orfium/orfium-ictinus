export const spacing = {
  '0': '0px' as const,
  '1': '1px' as const,
  '2': '2px' as const,
  '3': '4px' as const,
  '4': '8px' as const,
  '5': '12px' as const,
  '6': '16px' as const,
  '7': '20px' as const,
  '8': '24px' as const,
  '9': '32px' as const,
  '10': '36px' as const,
  '11': '40px' as const,
  '12': '44px' as const,
} as const;

export type Spacing = keyof typeof spacing;
