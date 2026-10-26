import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { render, screen } from '../test';
import { TextField } from './TextField';

describe('TextField', () => {
  describe('rendering', () => {
    it('associates label with input', () => {
      render(
        <TextField>
          <TextField.Label>Email</TextField.Label>
          <TextField.Input type="email" />
        </TextField>
      );

      expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    });

    it('renders description text', () => {
      render(
        <TextField>
          <TextField.Label>Email</TextField.Label>
          <TextField.Input type="email" />
          <TextField.Description>We will not share your email.</TextField.Description>
        </TextField>
      );

      expect(screen.getByText('We will not share your email.')).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAccessibleDescription(
        'We will not share your email.'
      );
    });

    it('renders error when invalid', () => {
      render(
        <TextField isInvalid>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input type="password" />
          <TextField.Error>Password is required.</TextField.Error>
        </TextField>
      );

      expect(screen.getByText('Password is required.')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInvalid();
    });

    it('sets data-variant on input', () => {
      const { rerender } = render(
        <TextField>
          <TextField.Label>Name</TextField.Label>
          <TextField.Input />
        </TextField>
      );

      expect(screen.getByRole('textbox')).toHaveAttribute('data-variant', 'normal');

      rerender(
        <TextField>
          <TextField.Label>Name</TextField.Label>
          <TextField.Input variant="compact" />
        </TextField>
      );

      expect(screen.getByRole('textbox')).toHaveAttribute('data-variant', 'compact');
    });

    it('renders textarea', () => {
      render(
        <TextField>
          <TextField.Label>Notes</TextField.Label>
          <TextField.TextArea />
        </TextField>
      );

      expect(screen.getByRole('textbox', { name: 'Notes' })).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLTextAreaElement);
    });

    it('merges className on root and input', () => {
      render(
        <TextField data-testid="field" className="field-class">
          <TextField.Label>Name</TextField.Label>
          <TextField.Input className="input-class" data-testid="input" />
        </TextField>
      );

      expect(screen.getByTestId('field')).toHaveClass('field-class');
      expect(screen.getByTestId('input')).toHaveClass('input-class');
    });

    it('forwards refs to root and input', () => {
      const fieldRef = createRef<HTMLDivElement>();
      const inputRef = createRef<HTMLInputElement>();

      render(
        <TextField ref={fieldRef} data-testid="field">
          <TextField.Label>Name</TextField.Label>
          <TextField.Input ref={inputRef} data-testid="input" />
        </TextField>
      );

      expect(fieldRef.current).toBe(screen.getByTestId('field'));
      expect(inputRef.current).toBe(screen.getByTestId('input'));
    });
  });

  describe('interactions', () => {
    it('updates value when typing', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      render(
        <TextField onChange={onChange}>
          <TextField.Label>Name</TextField.Label>
          <TextField.Input />
        </TextField>
      );

      await user.type(screen.getByRole('textbox'), 'Orfium');

      expect(screen.getByRole('textbox')).toHaveValue('Orfium');
      expect(onChange).toHaveBeenCalled();
    });

    it('does not accept input when disabled', async () => {
      const user = userEvent.setup();

      render(
        <TextField isDisabled>
          <TextField.Label>Name</TextField.Label>
          <TextField.Input />
        </TextField>
      );

      const input = screen.getByRole('textbox', { name: 'Name' });
      expect(input).toBeDisabled();

      await user.type(input, 'Orfium');

      expect(input).toHaveValue('');
    });
  });

  describe('floating label', () => {
    it('renders floating label marker', () => {
      render(
        <TextField aria-label="Search">
          <TextField.Control>
            <TextField.FloatingLabel>Search</TextField.FloatingLabel>
            <TextField.Input />
          </TextField.Control>
        </TextField>
      );

      expect(screen.getByText('Search')).toHaveAttribute('data-floating-label');
    });
  });

  describe('group and addon', () => {
    it('marks addon alignment', () => {
      render(
        <TextField>
          <TextField.Label>Website</TextField.Label>
          <TextField.Group>
            <TextField.Input />
            <TextField.Addon data-testid="start-addon">https://</TextField.Addon>
            <TextField.Addon align="inline-end" data-testid="end-addon">
              .com
            </TextField.Addon>
          </TextField.Group>
        </TextField>
      );

      expect(screen.getByTestId('start-addon')).toHaveAttribute('data-align', 'inline-start');
      expect(screen.getByTestId('end-addon')).toHaveAttribute('data-align', 'inline-end');
    });

    it('focuses input when addon is clicked', async () => {
      const user = userEvent.setup();

      render(
        <TextField>
          <TextField.Label>Website</TextField.Label>
          <TextField.Group>
            <TextField.Input data-testid="input" />
            <TextField.Addon data-testid="addon">https://</TextField.Addon>
          </TextField.Group>
        </TextField>
      );

      await user.click(screen.getByTestId('addon'));

      expect(screen.getByTestId('input')).toHaveFocus();
    });

    it('does not focus input when clicking a button inside addon', async () => {
      const user = userEvent.setup();
      const onPress = vi.fn();

      render(
        <TextField>
          <TextField.Label>Search</TextField.Label>
          <TextField.Group>
            <TextField.Input data-testid="input" />
            <TextField.Addon data-testid="addon" align="inline-end">
              <button type="button" onClick={onPress}>
                Clear
              </button>
            </TextField.Addon>
          </TextField.Group>
        </TextField>
      );

      await user.click(screen.getByRole('button', { name: 'Clear' }));

      expect(onPress).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId('input')).not.toHaveFocus();
    });

    it('does not focus input when addon click is prevented', async () => {
      const user = userEvent.setup();

      render(
        <TextField>
          <TextField.Label>Website</TextField.Label>
          <TextField.Group>
            <TextField.Input data-testid="input" />
            <TextField.Addon
              data-testid="addon"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              https://
            </TextField.Addon>
          </TextField.Group>
        </TextField>
      );

      await user.click(screen.getByTestId('addon'));

      expect(screen.getByTestId('input')).not.toHaveFocus();
    });

    it('sets input-group-control slot on nested input', () => {
      render(
        <TextField>
          <TextField.Label>Website</TextField.Label>
          <TextField.Group>
            <TextField.Input data-testid="input" />
          </TextField.Group>
        </TextField>
      );

      expect(screen.getByTestId('input')).toHaveAttribute('data-slot', 'input-group-control');
    });
  });
});
