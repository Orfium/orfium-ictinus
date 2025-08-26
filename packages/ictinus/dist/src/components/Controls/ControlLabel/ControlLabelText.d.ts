import { default as React } from 'react';
import { TestProps } from '../../../utils/types';
import { LabelConfig } from '../Controls.types';
type Props = Pick<LabelConfig, 'size' | 'helpText'> & TestProps;
declare const ControlLabelText: React.FCC<Props>;
export default ControlLabelText;
