import type { TestProps } from '~/utils/types';
import type { LabelConfig } from '../Controls.types';
import { helpTextStyles } from './ControlLabel.style';

type Props = Pick<LabelConfig, 'helpText'> & TestProps;

const ControlHelpText: React.FCC<Omit<Props, 'size'>> = ({ helpText, dataTestPrefixId }) => {
  return helpText ? (
    <div css={helpTextStyles()} data-testid={`${dataTestPrefixId}_helpText`}>
      {helpText}
    </div>
  ) : null;
};

export default ControlHelpText;
