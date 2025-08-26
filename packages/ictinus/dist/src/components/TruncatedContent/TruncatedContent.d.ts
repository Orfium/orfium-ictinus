import { default as React } from 'react';
export type TruncatedContentProps = {
    /** The content of the tooltip */
    tooltipContent: string | undefined;
    /** Flag for overriding other settings to always show the tooltip */
    isAlwaysVisible?: boolean;
    /** The placement of the tooltip */
    placement?: 'top' | 'bottom' | 'right' | 'left';
};
declare const TruncatedContent: React.FCC<TruncatedContentProps>;
export default TruncatedContent;
