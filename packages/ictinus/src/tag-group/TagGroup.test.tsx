import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { render, screen } from '../test';
import { Tag, TagGroup, TagList } from './TagGroup';

describe('TagGroup', () => {
  it('passes through DOM props', () => {
    render(
      <TagGroup
        data-testid="tag-group"
        id="custom-id"
        data-custom="test-value"
        aria-label="Custom tag group"
      >
        <TagList>
          <Tag>Test Tag</Tag>
        </TagList>
      </TagGroup>
    );

    const tagGroup = screen.getByTestId('tag-group');
    expect(tagGroup).toHaveAttribute('id', 'custom-id');
    expect(tagGroup).toHaveAttribute('data-custom', 'test-value');

    const tagList = screen.getByLabelText('Custom tag group');
    expect(tagList).toBeInTheDocument();
  });

  it('merges className correctly', () => {
    render(
      <TagGroup aria-label="Tags" data-testid="tag-group" className="custom-class">
        <TagList>
          <Tag>Test Tag</Tag>
        </TagList>
      </TagGroup>
    );

    const tagGroup = screen.getByTestId('tag-group');
    expect(tagGroup).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <TagGroup aria-label="Tags" ref={ref} data-testid="tag-group">
        <TagList>
          <Tag>Test Tag</Tag>
        </TagList>
      </TagGroup>
    );

    expect(ref.current).toBe(screen.getByTestId('tag-group'));
  });

  it('marks tag as selected when clicked in interactive mode', async () => {
    const user = userEvent.setup();
    render(
      <TagGroup aria-label="Tags" selectionMode="single">
        <TagList>
          <Tag id="interactive-tag" data-testid="tag">
            Interactive Tag
          </Tag>
        </TagList>
      </TagGroup>
    );

    const tag = screen.getByTestId('tag');
    expect(tag).toHaveAttribute('aria-selected', 'false');

    await user.click(tag);

    expect(tag).toHaveAttribute('aria-selected', 'true');
  });

  it('handles single selection', async () => {
    const handleSelectionChange = vi.fn();

    render(
      <TagGroup aria-label="Tags" selectionMode="single" onSelectionChange={handleSelectionChange}>
        <TagList>
          <Tag id="tag1" data-testid="tag-1">
            Tag 1
          </Tag>
          <Tag id="tag2" data-testid="tag-2">
            Tag 2
          </Tag>
        </TagList>
      </TagGroup>
    );

    const tag1 = screen.getByTestId('tag-1');
    const tag2 = screen.getByTestId('tag-2');
    await userEvent.click(tag1);

    expect(handleSelectionChange).toHaveBeenCalledTimes(1);
    expect(tag1).toHaveAttribute('aria-selected', 'true');
    expect(tag2).toHaveAttribute('aria-selected', 'false');
  });

  it('handles multiple selection', async () => {
    const handleSelectionChange = vi.fn();

    render(
      <TagGroup
        aria-label="Tags"
        selectionMode="multiple"
        onSelectionChange={handleSelectionChange}
      >
        <TagList>
          <Tag id="tag1" data-testid="multi-tag-1">
            Tag 1
          </Tag>
          <Tag id="tag2" data-testid="multi-tag-2">
            Tag 2
          </Tag>
        </TagList>
      </TagGroup>
    );

    const tag1 = screen.getByTestId('multi-tag-1');
    const tag2 = screen.getByTestId('multi-tag-2');

    await userEvent.click(tag1);
    await userEvent.click(tag2);

    expect(handleSelectionChange).toHaveBeenCalledTimes(2);
    expect(tag1).toHaveAttribute('aria-selected', 'true');
    expect(tag2).toHaveAttribute('aria-selected', 'true');
  });

  it('shows remove button when onRemove is provided', () => {
    const handleRemove = vi.fn();

    render(
      <TagGroup aria-label="Removable tags" onRemove={handleRemove}>
        <TagList>
          <Tag id="removable-tag">Removable Tag</Tag>
        </TagList>
      </TagGroup>
    );

    const removeButton = screen.getByRole('button');
    expect(removeButton).toBeInTheDocument();
    expect(removeButton).toHaveAttribute('aria-label', 'Remove');
  });

  it('calls onRemove when remove button is clicked', async () => {
    const user = userEvent.setup();
    const handleRemove = vi.fn();

    render(
      <TagGroup aria-label="Removable tags" onRemove={handleRemove}>
        <TagList>
          <Tag id="removable-tag">Removable Tag</Tag>
        </TagList>
      </TagGroup>
    );

    const removeButton = screen.getByRole('button');
    await user.click(removeButton);

    expect(handleRemove).toHaveBeenCalledTimes(1);
  });
});

describe('Tag', () => {
  it('passes through DOM props', () => {
    render(
      <TagGroup aria-label="Tags">
        <TagList>
          <Tag
            data-testid="tag"
            id="custom-tag-id"
            data-custom="tag-value"
            data-aria-describedby="tag-description"
            data-role="listitem"
          >
            Test Tag
          </Tag>
        </TagList>
      </TagGroup>
    );

    const tag = screen.getByTestId('tag');
    expect(tag.id).toContain('custom-tag-id');
    expect(tag).toHaveAttribute('data-custom', 'tag-value');
    expect(tag).toHaveAttribute('data-aria-describedby', 'tag-description');
    expect(tag).toHaveAttribute('data-role', 'listitem');
  });

  it('merges className correctly', () => {
    render(
      <TagGroup aria-label="Tags">
        <TagList>
          <Tag data-testid="tag" className="custom-tag-class">
            Test Tag
          </Tag>
        </TagList>
      </TagGroup>
    );

    const tag = screen.getByTestId('tag');
    expect(tag).toHaveClass('custom-tag-class');
  });
});
