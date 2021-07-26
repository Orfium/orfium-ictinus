import { Theme } from '../../../theme';
import spacing from '../../../theme/spacing';
import { getTextFieldSize } from '../../../utils/size-utils';

describe('TextField', () => {
  describe('Utils', () => {
    it('should matches the correct style configuration based on size', () => {
      const mockStylesMD = `padding: 16px 1rem;`;
      const mockStylesSM = `padding: 12px 1rem;`;
      const textFieldStyle = getTextFieldSize({ spacing } as Theme, 'someLabel', true);

      expect(textFieldStyle['md']).toBe(mockStylesMD);
      expect(textFieldStyle['sm']).toBe(mockStylesSM);
    });
  });
});
