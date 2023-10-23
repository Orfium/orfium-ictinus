import * as React from 'react';

import {
  actionsContainer,
  headingContainer,
  labelContainer,
  messageContainer,
  modalContentContainer,
} from './ModalContent.style';
import { generateTestDataId } from '../../../utils/helpers';
import type { TestId } from '../../../utils/types';
import Button from '../../Button';

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

const ModalContent: React.FCC<ModalContentProps> = ({
  label,
  heading,
  message,
  primaryCTA,
  primaryCTALabel,
  secondaryCTA,
  secondaryCTALabel,
  dataTestId,
}) => {
  return (
    <div
      role="dialog"
      css={modalContentContainer}
      data-testid={generateTestDataId('modal-content', dataTestId)}
    >
      {Boolean(label) && <p css={labelContainer}>{label}</p>}
      <h5
        css={headingContainer}
        data-testid={generateTestDataId('modal-content-header', dataTestId)}
      >
        {heading}
      </h5>
      <p
        css={messageContainer}
        data-testid={generateTestDataId('modal-content-message', dataTestId)}
      >
        {message}
      </p>
      <div css={actionsContainer}>
        {Boolean(secondaryCTA && secondaryCTALabel) && (
          <Button onClick={secondaryCTA} dataTestId="modal-content-secondaryCTA">
            {secondaryCTALabel}
          </Button>
        )}
        {Boolean(primaryCTA && primaryCTALabel) && (
          <Button onClick={primaryCTA} dataTestId="modal-content-primaryCTA">
            {primaryCTALabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
