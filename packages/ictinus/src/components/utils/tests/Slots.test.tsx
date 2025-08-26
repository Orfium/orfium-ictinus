import { render, renderHook } from '~/test';
import { ClearSlots, SlotProvider, useSlotProps } from '../Slots';

describe('useSlotProps()', () => {
  it('merges props with slot props', () => {
    const wrapper = ({ children }) => (
      <SlotProvider slots={{ test: { className: 'test-class' } }}>{children}</SlotProvider>
    );

    const { result } = renderHook(() => useSlotProps({ id: 'test-id' }, 'test'), { wrapper });

    expect(result.current).toEqual({
      id: 'test-id',
      className: 'test-class',
      'data-slot': 'test',
    });
  });

  it('uses the data-slot attribute if provided', () => {
    const wrapper = ({ children }) => (
      <SlotProvider slots={{ custom: { className: 'test-class' } }}>{children}</SlotProvider>
    );

    const { result } = renderHook(() => useSlotProps({ id: 'test-id', 'data-slot': 'custom' }), {
      wrapper,
    });

    expect(result.current).toEqual({
      id: 'test-id',
      className: 'test-class',
      'data-slot': 'custom',
    });
  });
});

describe('<SlotProvider />', () => {
  it('provides slot props to children', () => {
    const Component = () => {
      const props = useSlotProps({}, 'test');
      return <div {...props} />;
    };

    const { container } = render(
      <SlotProvider slots={{ test: { className: 'test-class' } }}>
        <Component />
      </SlotProvider>
    );

    expect(container.firstChild).toHaveClass('test-class');
    expect(container.firstChild).toHaveAttribute('data-slot', 'test');
  });

  it('merges parent and child slot props', () => {
    const Component = () => {
      const props = useSlotProps({}, 'test');
      return <div {...props} />;
    };

    const { container } = render(
      <SlotProvider slots={{ test: { className: 'test-class' } }}>
        <SlotProvider slots={{ test: { id: 'test-id' } }}>
          <Component />
        </SlotProvider>
      </SlotProvider>
    );

    expect(container.firstChild).toHaveClass('test-class');
    expect(container.firstChild).toHaveAttribute('id', 'test-id');
    expect(container.firstChild).toHaveAttribute('data-slot', 'test');
  });
});

describe('<ClearSlots />', () => {
  it('clears slot context for children', () => {
    const Component = () => {
      const props = useSlotProps({}, 'test');
      return <div {...props} />;
    };

    const { container } = render(
      <SlotProvider slots={{ test: { className: 'test-class' } }}>
        <ClearSlots>
          <Component />
        </ClearSlots>
      </SlotProvider>
    );

    expect(container.firstChild).not.toHaveClass('test-class');
    expect(container.firstChild).toHaveAttribute('data-slot', 'test');
  });
});
