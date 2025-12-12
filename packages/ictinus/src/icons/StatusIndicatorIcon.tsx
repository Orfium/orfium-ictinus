import { Box, type BoxProps } from '../vanilla/Box';

export function StatusIndicatorIcon(props: BoxProps) {
  return (
    <Box asChild size="4" {...props}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="7" width="6" height="6" rx="3" fill="currentColor" />
      </svg>
    </Box>
  );
}
