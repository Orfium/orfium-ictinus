import React from 'react';
import { render, fireEvent } from 'test';
import { SelectedItemProvider } from '../SelectedItemContext';
import { Categories } from './index';
import '@testing-library/jest-dom';

jest.mock('lodash/debounce', () =>
  jest.fn(fn => {
    fn.cancel = jest.fn();

    return fn;
  })
);

describe('Asset Matching - Categories', () => {
  it('should add/remove selected class during mouse actions', async () => {
    const { container, getByTestId } = render(
      <SelectedItemProvider>
        <Categories
          matchedCategoryItems={['test category item']}
          categories={[{ title: 'test category', categoryItems: ['test category item'] }]}
        />
      </SelectedItemProvider>
    );

    const categoryItem = getByTestId('test-category-item');
    expect(categoryItem).toBeInTheDocument();
    await fireEvent.mouseOver(categoryItem);

    const selectedItemMouseOver = container.querySelector('.selected');
    expect(selectedItemMouseOver).toBeInTheDocument();

    await fireEvent.mouseLeave(categoryItem);

    const selectedItemMouseLeave = container.querySelector('.selected');
    expect(selectedItemMouseLeave).not.toBeInTheDocument();
  });
});
