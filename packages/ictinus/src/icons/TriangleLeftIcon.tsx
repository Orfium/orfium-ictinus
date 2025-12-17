import { Box, type BoxProps } from '../vanilla/Box';

export function TriangleLeftIcon(props: BoxProps) {
  return (
    <Box asChild size="4" {...props}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3598 13.6332C11.0111 14.176 12 13.7128 12 12.865V7.13504C12 6.2872 11.0111 5.82405 10.3598 6.36682L6.92186 9.23178C6.44211 9.63157 6.44211 10.3684 6.92187 10.7682L10.3598 13.6332Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  );
}
