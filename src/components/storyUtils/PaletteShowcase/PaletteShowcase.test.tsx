import React from 'react';
import { render } from 'test';

import PaletteShowcase from './PaletteShowcase';

describe('PaletteShowcase', () => {
  it('should render correctly', () => {
    const { container } = render(<PaletteShowcase />);
    expect(container).toMatchSnapshot();
  });
});
