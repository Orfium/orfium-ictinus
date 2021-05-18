import React from 'react';
import Chip from './Chip';
import '@testing-library/jest-dom';
import { render, fireEvent } from '../../test';
import { Theme } from '../../theme';
import { pickTextColorFromSwatches } from '../../theme/palette';

describe('Chip', () => {
  const images = [
    'https://brandmark.io/logo-rank/random/pepsi.png',
    'https://brandmark.io/logo-rank/random/twitter.png',
  ];
  const chipLabel = 'Label Text';
  const chipProps = {
    leftIcon: <img src={images[0]} />,
    rightIcon: <img src={images[1]} />,
  };

  test('that children are rendering', async () => {
    const { getByText, getAllByRole } = render(<Chip {...chipProps}>{chipLabel}</Chip>);

    const icons = getAllByRole('img');
    expect(icons).toHaveLength(2);
    expect(icons[0]).toHaveAttribute('src', images[0]);
    expect(icons[1]).toHaveAttribute('src', images[1]);
    expect(getByText(chipLabel)).toBeInTheDocument();
  });

  test('that color is rendering correctly', async () => (theme: Theme) => {
    const fill = 'red';
    const shade = 700;
    const expectedTextColor = pickTextColorFromSwatches(fill, shade);
    const expectedFillColor = theme.utils.getColor(fill, shade);
    const { getByTestId } = render(<Chip>{chipLabel}</Chip>);

    const componentContainer = getByTestId('chip'); // the container in which styles are applied
    expect(componentContainer).toHaveStyle(`color: ${expectedTextColor}`);
    expect(componentContainer).toHaveStyle(`background-color: ${expectedFillColor}`);
  });

  test('that handlers are being called when icons are clicked', async () => {
    const leftIconHandler = jest.fn();
    const rightIconHandler = jest.fn();
    const { getAllByRole } = render(
      <Chip {...chipProps} onLeftIconClick={leftIconHandler} onRightIconClick={rightIconHandler}>
        {chipLabel}
      </Chip>
    );
    const icons = getAllByRole('img');
    fireEvent.click(icons[0]);
    expect(leftIconHandler).toHaveBeenCalledTimes(1);
    fireEvent.click(icons[1]);
    expect(rightIconHandler).toHaveBeenCalledTimes(1);
  });
});
