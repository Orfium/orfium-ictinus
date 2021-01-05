import { getTextFieldSize } from '../../../utils/size-utils';
import spacing from '../../../theme/spacing';
import { Theme } from '../../../theme';

describe('TextField', () => {
  describe('Utils', () => {
    it('should matches the correct style configuration based on size', () => {
      const mockStylesMD = `
    padding: 1.5rem 1rem;
    label {
      left: 2.4rem;
    };`;
      const mockStylesSM = `
     padding: 1rem 0.5rem;
     label {
      left: 1.9rem;
    };`;
      const textFieldStyle = getTextFieldSize({ spacing } as Theme, 'someLabel', true);

      expect(textFieldStyle['md']).toBe(mockStylesMD);
      expect(textFieldStyle['sm']).toBe(mockStylesSM);
    });
  });
});
