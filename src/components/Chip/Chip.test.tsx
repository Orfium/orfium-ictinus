import React from 'react';

import { render, fireEvent } from '../../test';
import Chip from './Chip';

describe('Chip', () => {
  const images = [
    'https://brandmark.io/logo-rank/random/pepsi.png',
    'https://brandmark.io/logo-rank/random/twitter.png',
  ];
  const chipLabel = 'Label Text';
  const badgeNumber = 3;

  test('that Badge is rendered when badgeNumber prop is provided', async () => {
    const { getByText, getByTestId } = render(
      <Chip styleType={'interactive'} badgeNumber={badgeNumber}>
        {chipLabel}
      </Chip>
    );
    expect(getByTestId('badge')).toBeInTheDocument();
    expect(getByText(badgeNumber)).toBeInTheDocument();
  });

  test('that read-only Chip is not a button', async () => {
    const { queryByRole, debug } = render(<Chip>{chipLabel}</Chip>);
    debug();
    expect(queryByRole('button')).not.toBeInTheDocument();
    expect(document.querySelector('button[data-testid="chip"]')).not.toBeInTheDocument();
  });

  test('that interactive Chip is a button', async () => {
    const { getByRole, debug } = render(<Chip styleType={'interactive'}>{chipLabel}</Chip>);
    debug();
    expect(getByRole('button')).toBeInTheDocument();
    expect(document.querySelector('button[data-testid="chip"]')).toBeInTheDocument();
  });

  test('that onClick handler is being called on interactive Chip', async () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Chip styleType={'interactive'} onClick={onClick}>
        {chipLabel}
      </Chip>
    );
    const chip = getByTestId('chip');
    fireEvent.click(chip);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('that onClick handler is not being called on read-only Chip', async () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Chip onClick={onClick}>{chipLabel}</Chip>);
    const chip = getByTestId('chip');
    fireEvent.click(chip);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
