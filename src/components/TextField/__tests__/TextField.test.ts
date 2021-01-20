import { getTextFieldSize } from '../../../utils/size-utils';
import spacing from '../../../theme/spacing';
import { Theme } from '../../../theme';

describe('TextField', () => {
  describe('Utils', () => {
    it('should matches the correct style configuration based on size', () => {
      const mockStylesMD = `padding: 16px 0.5rem;`;
      const mockStylesSM = `padding: 11px 0.5rem;`;
      const textFieldStyle = getTextFieldSize({ spacing } as Theme, 'someLabel', true);

      expect(textFieldStyle['md']).toBe(mockStylesMD);
      expect(textFieldStyle['sm']).toBe(mockStylesSM);
    });
  });
});
