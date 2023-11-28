import React from 'react';
import { fireEvent, render } from '../../test';

import Tag from './Tag';

const handleSelect = vi.fn();
const handleClear = vi.fn();

describe('Tag', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('that on selectable Tag the onSelect handler is being called when clicked', () => {
    const { getByTestId } = render(
      <Tag onSelect={handleSelect} dataTestPrefixId="test">
        Tag
      </Tag>
    );

    const tag = getByTestId('test_tag_container');
    expect(tag).toBeInTheDocument();

    fireEvent.click(tag);

    expect(handleSelect).toHaveBeenCalledTimes(1);
  });

  test('that on selectable Tag the onSelect handler is being called when Enter is pressed', () => {
    const { getByTestId } = render(
      <Tag onSelect={handleSelect} dataTestPrefixId="test">
        Tag
      </Tag>
    );

    const tag = getByTestId('test_tag_container');
    expect(tag).toBeInTheDocument();

    fireEvent.focus(tag);

    fireEvent.keyDown(tag, {
      key: 'Enter',
    });

    expect(handleSelect).toHaveBeenCalledTimes(1);
  });

  test('that selectable Tag is rendered correctly when selected', () => {
    const { getByTestId } = render(
      <Tag onSelect={handleSelect} isSelected dataTestPrefixId="test">
        Tag
      </Tag>
    );
    const tag = getByTestId('test_tag_container');
    expect(tag).toBeInTheDocument();

    const tagCheck = getByTestId('test_tag_prefix');
    expect(tagCheck).toBeInTheDocument();
  });

  test('that on clearable Tag the onClear handler is being called when clicked', () => {
    const { getByTestId } = render(
      <Tag onClear={handleClear} dataTestPrefixId="test">
        Tag
      </Tag>
    );
    const tag = getByTestId('test_tag_container');
    expect(tag).toBeInTheDocument();

    const tagClear = getByTestId('test_tag_suffix');
    expect(tagClear).toBeInTheDocument();

    fireEvent.click(tagClear);

    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  test('that on clearable Tag the onClear handler is being called when Enter is pressed', () => {
    const { getByTestId } = render(
      <Tag onClear={handleClear} dataTestPrefixId="test">
        Tag
      </Tag>
    );
    const tag = getByTestId('test_tag_container');
    expect(tag).toBeInTheDocument();

    fireEvent.focus(tag);

    fireEvent.keyDown(tag, {
      key: 'Enter',
    });

    expect(handleClear).toHaveBeenCalledTimes(1);
  });
});
