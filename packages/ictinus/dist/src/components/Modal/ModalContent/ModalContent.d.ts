import { TestId } from '../../../utils/types';
import * as React from 'react';
export type ModalContentProps = {
    /** The label of the modal. */
    label?: string;
    /** The heading of the modal. */
    heading: string;
    /** The main messager of the modal. */
    message: string;
    /** The primary call-to-action label of the Modal */
    primaryCTALabel?: string;
    /** The primary call-to-action of the Modal */
    primaryCTA?: () => void;
    /** The secondary call-to-action label of the Modal */
    secondaryCTALabel?: string;
    /** The secondary call-to-action of the Modal */
    secondaryCTA?: () => void;
    /** The data test id if needed */
    dataTestId?: TestId;
};
declare const ModalContent: React.FCC<ModalContentProps>;
export default ModalContent;
