import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Filter from './Filter';
import { render, screen } from '../../test';

const items = [
  { label: 'option 1', value: 1 },
  { label: 'option 2', value: 2 },
];
const label = 'Label';

describe('Generic Filter', () => {
  const onSelect = jest.fn();

  beforeEach(() => {
    render(
      <div>
        <Filter
          label={label}
          items={items}
          color={'lightCoolGray-400'}
          styleType={'filled'}
          onSelect={onSelect}
          defaultValue={items[0]}
          selectedItem={items[0]}
        />
      </div>
    );
  });


  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display a dropdown menu when the button is clicked', () => {
    const button = screen.getByTestId('filter');

    userEvent.click(button);

    expect(screen.getByTestId('filter-menu')).toBeInTheDocument();
  });

  it('should trigger onSelect property function when one item of the dropdown is clicked',  () => {
    const button = screen.getByTestId('filter');

    userEvent.click(button);
    userEvent.click(screen.getByText(items[1].label));

    expect(onSelect).toHaveBeenCalledWith(items[1]);
  });
});
