import { forwardRef } from 'react';
import { Box, type BoxProps } from '../vanilla/Box';

export type DataTableHeaderProps = BoxProps;

export const DataTableHeader = forwardRef<HTMLDivElement, DataTableHeaderProps>(
  ({ children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        bg="default"
        px="lg"
        py="sm"
        h="11"
        borderT="1"
        borderL="1"
        borderR="1"
        borderColor="decorative.default"
        roundedT="2"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

DataTableHeader.displayName = 'DataTableHeader';
