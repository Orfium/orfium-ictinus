import { ChangeEvent, useCallback, useState } from 'react';
import { darken, lighten } from 'polished';
import { validateColor } from './utils';

const DEFAULT_COLOR = 'white';

export const useColors = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [lightenValue, setLightenValue] = useState(0.1);
  const [darkenValue, setDarkenValue] = useState(0.1);

  const darkColor = darken(darkenValue, color);
  const lightColor = lighten(lightenValue, color);

  const updateColor = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const colorInput = event.target.value;
    if (!colorInput) {
      setColor(DEFAULT_COLOR);
    }

    if (validateColor(colorInput)) {
      setColor(colorInput);
    }
  }, []);

  return {
    color: {
      normal: color,
      darken: darkColor,
      lighten: lightColor,
    },
    utilityValues: {
      lighten: lightenValue,
      darken: darkenValue,
    },
    updateColor,
    setLightenValue,
    setDarkenValue,
  };
};
