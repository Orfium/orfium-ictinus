import { useTheme as EmotionUseTheme } from 'emotion-theming';
import { Theme } from 'src/theme';

const useTheme = () => {
  return EmotionUseTheme<Theme>();
};

export default useTheme;
