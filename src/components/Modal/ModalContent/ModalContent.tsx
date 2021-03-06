/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { TestId } from '../../../utils/types';
import {
  actionsContainer,
  headingContainer,
  labelContainer,
  messageContainer,
  modalContentContainer,
} from './ModalContent.style';
import { generateTestDataId } from '../../../utils/helpers';
import Button from '../../Button';

export type Props = {
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

const ModalContent: React.FC<Props> = ({
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
      role={'dialog'}
      css={modalContentContainer}
      data-testid={generateTestDataId('modal-content', dataTestId)}
    >
      {Boolean(label) && <p css={labelContainer}>{label}</p>}
      <h5 css={headingContainer}>{heading}</h5>
      <p css={messageContainer}>{message}</p>
      <div css={actionsContainer}>
        {Boolean(secondaryCTA && secondaryCTALabel) && (
          <Button
            type={'primary'}
            filled={false}
            onClick={secondaryCTA}
            size={'md'}
            dataTestId={'modal-content-secondaryCTA'}
            transparent
          >
            {secondaryCTALabel}
          </Button>
        )}
        {Boolean(primaryCTA && primaryCTALabel) && (
          <Button
            type={'primary'}
            onClick={primaryCTA}
            size={'md'}
            dataTestId={'modal-content-primaryCTA'}
          >
            {primaryCTALabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
