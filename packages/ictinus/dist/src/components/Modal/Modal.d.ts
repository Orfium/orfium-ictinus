import { default as React } from 'react';
import { TestId } from '../../utils/types';
import { ModalContentProps } from './ModalContent/ModalContent';
export type ModalProps = {
    /**  If true, the modal is open. Defaults to false. */
    isOpen: boolean;
    /** Callback fired when the component requests to be closed. */
    onClose: () => void;
    /** If contentProps are defined then ModalContent will be used instead of children. Otherwise, you can use the Modal as a wrapper  */
    contentProps?: ModalContentProps;
    /** The data test id if needed */
    dataTestId?: TestId;
    /** If false, the content won't have any padding */
    isContentPadded?: boolean;
    /** Optional max width */
    maxWidth?: string;
    /** Optional max height */
    maxHeight?: string;
};
declare const Modal: React.FCC<ModalProps>;
export default Modal;
