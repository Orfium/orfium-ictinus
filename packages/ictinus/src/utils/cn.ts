import { sprinklesMerge } from '../sprinkles/sprinklesMerge';

export function cn(...classNames: Array<string | undefined>) {
  return sprinklesMerge(...classNames);
}
