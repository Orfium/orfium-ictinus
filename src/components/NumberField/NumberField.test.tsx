import userEvent from '@testing-library/user-event';
import React from 'react';
import NumberField, { NumberFieldProps as ArgsTable } from './NumberField';
import { render, screen } from '../../test';

const renderNumberField = (props: Partial<Props> = {}) => {
  const defaultProps = {
    label: 'Label',
    formatOptions: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  };

  return render(<NumberField {...{ ...defaultProps, ...props }} />);
};

describe('NumberField', () => {
  let input: HTMLInputElement;
  let increase: HTMLButtonElement;
  let decrease: HTMLButtonElement;

  it('formats the number input based on the given format', async () => {
    renderNumberField();
    input = screen.getByTestId('input') as HTMLInputElement;

    userEvent.type(input, '12.3456');
    userEvent.click(document.body);
    expect(input).toHaveValue('12.35');
  });

  it('it rounds number input based on step', async () => {
    renderNumberField({ step: 0.5 });
    input = screen.getByTestId('input') as HTMLInputElement;

    userEvent.type(input, '12.21');
    userEvent.click(document.body);
    expect(input).toHaveValue('12.00');
  });

  it('increases and decreases the number through stepper', async () => {
    renderNumberField({ step: 0.5, hasStepper: true });
    input = screen.getByTestId('input') as HTMLInputElement;
    increase = screen.getByTestId('number_increment') as HTMLButtonElement;
    decrease = screen.getByTestId('number_decrement') as HTMLButtonElement;

    userEvent.type(input, '12.00');
    userEvent.click(document.body);
    userEvent.click(increase);
    expect(input).toHaveValue('12.50');
    userEvent.click(decrease);
    expect(input).toHaveValue('12.00');
  });

  it('increases and decreases the number through keyboard', async () => {
    renderNumberField({ step: 0.5, hasStepper: true });
    input = screen.getByTestId('input') as HTMLInputElement;

    userEvent.type(input, '12.00');
    userEvent.click(document.body);

    userEvent.click(input);

    userEvent.type(input, '{arrowup}');
    expect(input).toHaveValue('12.50');

    userEvent.type(input, '{arrowdown}');
    expect(input).toHaveValue('12.00');
  });

  it('it rejects number input outside min and max given', async () => {
    renderNumberField({ minValue: 10, maxValue: 20 });
    input = screen.getByTestId('input') as HTMLInputElement;

    userEvent.type(input, '5');
    userEvent.click(document.body);
    expect(input).toHaveValue('10.00');

    userEvent.clear(input);

    userEvent.type(input, '25');
    userEvent.click(document.body);
    expect(input).toHaveValue('20.00');
  });
});
