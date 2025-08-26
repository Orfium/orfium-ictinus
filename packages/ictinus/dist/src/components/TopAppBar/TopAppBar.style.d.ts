import { SerializedStyles } from '@emotion/react';
import { Theme } from '../../theme';
declare const _default: {
    topAppBarWrapper: (isDark: boolean) => (theme: Theme) => SerializedStyles;
    topAppBarSection: SerializedStyles;
    additionalToolsSection: (hasAdditionalTools: boolean) => (theme: Theme) => SerializedStyles;
    mainSection: (hasSearchBar: boolean) => SerializedStyles;
};
export default _default;
