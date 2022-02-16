import { rem } from 'polished';

import { MD_HEIGHT, MIN_WIDTH, SM_HEIGHT } from '../../components/TextInputBase/config';
import { getTextFieldSize } from '../size-utils';

describe('Size utils', () => {
  describe('getTextFieldSize', () => {
    it('should matches the correct style configuration based on size', () => {
      const mockStylesMD = { minWidth: rem(MIN_WIDTH), height: rem(MD_HEIGHT) };
      const mockStylesSM = { minWidth: rem(MIN_WIDTH), height: rem(SM_HEIGHT) };
      const mockStylesAUTO = { minWidth: 'auto', height: 'auto' };

      expect(getTextFieldSize('md').minWidth).toBe(mockStylesMD.minWidth);
      expect(getTextFieldSize('md').height).toBe(mockStylesMD.height);

      expect(getTextFieldSize('sm').minWidth).toBe(mockStylesSM.minWidth);
      expect(getTextFieldSize('sm').height).toBe(mockStylesSM.height);

      expect(getTextFieldSize().minWidth).toBe(mockStylesAUTO.minWidth);
      expect(getTextFieldSize().height).toBe(mockStylesAUTO.height);
    });
  });
});
