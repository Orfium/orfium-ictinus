import { Elevation } from 'index';
import { default as React } from 'react';
import { SpacingKey } from '../../theme/globals/spacing';
export type CardProps = {
    /** Elevation of Card */
    elevated?: keyof Elevation;
    /** Transparency of Card: if false the Card's background is white, otherwise it's transparent */
    isTransparent?: boolean;
    /** Border radius of Card: if not provided it defaults to 0 */
    radius?: SpacingKey;
};
declare const Card: React.FC<React.PropsWithChildren<CardProps>>;
export default Card;
