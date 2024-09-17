import { expect } from 'vitest';
import { render, screen } from '~/test';
import { InlineAlert } from '../InlineAlert';

describe('<InlineAlert />', () => {
  it('renders the text correctly', async () => {
    render(
      <InlineAlert testId="inline-alert-test">
        Alert copy should be short, easy to understand and actionable.
      </InlineAlert>
    );

    expect(
      await screen.findByText('Alert copy should be short, easy to understand and actionable.')
    ).toBeInTheDocument();
    expect(await screen.findByTestId('inline-alert-test')).toBeInTheDocument();
  });
});
