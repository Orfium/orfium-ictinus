import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { darken, lighten } from 'polished';
import { validateColor } from './utils';

const DEFAULT_COLOR = 'white';

export const useColors = (defaultColor?: string, step = 0.1) => {
  const [color, setColor] = useState(defaultColor || DEFAULT_COLOR);
  useEffect(() => {
    if (defaultColor !== DEFAULT_COLOR) {
      setColor(defaultColor || DEFAULT_COLOR);
    }
  }, [defaultColor]);

  const [lightenValue, setLightenValue] = useState(step);
  const [darkenValue, setDarkenValue] = useState(step);

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
