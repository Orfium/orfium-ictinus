import { default as React } from 'react';
import { TestProps } from '../../../utils/types';
import { LabelConfig } from '../Controls.types';
type Props = Pick<LabelConfig, 'helpText'> & TestProps;
declare const ControlHelpText: React.FCC<Omit<Props, 'size'>>;
export default ControlHelpText;
