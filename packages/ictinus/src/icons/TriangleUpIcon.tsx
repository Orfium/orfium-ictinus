import { Box, type BoxProps } from '../vanilla/Box';

export function TriangleUpIcon(props: BoxProps) {
  return (
    <Box asChild size="4" {...props}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.09346 11.6879C5.65924 12.2089 6.02976 13 6.70803 13H13.292C13.9702 13 14.3408 12.2089 13.9065 11.6879L10.6146 7.73749C10.2947 7.35369 9.70526 7.35369 9.38542 7.73749L6.09346 11.6879Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  );
}
