import type { TestProps } from '~/utils/types';
import type { LabelConfig } from '../Controls.types';
import { labelStyles } from './ControlLabel.style';

type Props = Pick<LabelConfig, 'size' | 'helpText'> & TestProps;

const ControlLabelText: React.FCC<Props> = ({ size, dataTestPrefixId, children }) => {
  return typeof children === 'string' ? (
    <div css={labelStyles({ size })} data-testid={`${dataTestPrefixId}_label`}>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

export default ControlLabelText;
