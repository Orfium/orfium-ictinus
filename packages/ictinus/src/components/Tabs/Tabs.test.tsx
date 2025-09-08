import { vi } from 'vitest';
import { render, screen } from '~/test';
import Tabs from './Tabs';

describe('<Tabs />', () => {
  const mockItems = [
    {
      id: 'test-tab',
      label: 'Test Tab',
    },
  ];

  const mockOnSelectionChange = vi.fn();

  it('displays counter when counter is 0', () => {
    const items = [{ ...mockItems[0], counter: 0 }];

    render(<Tabs items={items} selectedKey="test-tab" onSelectionChange={mockOnSelectionChange} />);

    const counterElement = screen.getByTestId('ictinus_tab_test-tab_counter_tag_container');
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent('0');
  });

  it('displays counter when counter is "0"', () => {
    const items = [{ ...mockItems[0], counter: '0' }];

    render(<Tabs items={items} selectedKey="test-tab" onSelectionChange={mockOnSelectionChange} />);

    const counterElement = screen.getByTestId('ictinus_tab_test-tab_counter_tag_container');
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent('0');
  });

  it('displays counter when counter is 123', () => {
    const items = [{ ...mockItems[0], counter: 123 }];

    render(<Tabs items={items} selectedKey="test-tab" onSelectionChange={mockOnSelectionChange} />);

    const counterElement = screen.getByTestId('ictinus_tab_test-tab_counter_tag_container');
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent('123');
  });

  it('displays counter when counter is "1.2K"', () => {
    const items = [{ ...mockItems[0], counter: '1.2K' }];

    render(<Tabs items={items} selectedKey="test-tab" onSelectionChange={mockOnSelectionChange} />);

    const counterElement = screen.getByTestId('ictinus_tab_test-tab_counter_tag_container');
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent('1.2K');
  });

  it('hides counter when counter is empty string', () => {
    const items = [{ ...mockItems[0], counter: '' }];

    render(<Tabs items={items} selectedKey="test-tab" onSelectionChange={mockOnSelectionChange} />);

    const counterElement = screen.queryByTestId('ictinus_tab_test-tab_counter_tag_container');
    expect(counterElement).not.toBeInTheDocument();
  });

  it('hides counter when counter is null', () => {
    const items = [{ ...mockItems[0], counter: null }];

    render(<Tabs items={items} selectedKey="test-tab" onSelectionChange={mockOnSelectionChange} />);

    const counterElement = screen.queryByTestId('ictinus_tab_test-tab_counter_tag_container');
    expect(counterElement).not.toBeInTheDocument();
  });

  it('hides counter when counter is undefined', () => {
    const items = [{ ...mockItems[0], counter: undefined }];

    render(<Tabs items={items} selectedKey="test-tab" onSelectionChange={mockOnSelectionChange} />);

    const counterElement = screen.queryByTestId('ictinus_tab_test-tab_counter_tag_container');
    expect(counterElement).not.toBeInTheDocument();
  });
});
