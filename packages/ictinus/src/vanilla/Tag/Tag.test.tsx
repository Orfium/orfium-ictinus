import { createRef } from 'react';
import { describe, expect, it, vi } from 'vitest';

import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test';

import { CodeTag, Tag, TagGroup } from './Tag';

describe('TagGroup', () => {
  describe('Rendering', () => {
    it('should pass through DOM props', () => {
      render(
        <TagGroup
          data-testid="tag-group"
          id="custom-id"
          data-custom="test-value"
          aria-label="Custom tag group"
        >
          <Tag>Test Tag</Tag>
        </TagGroup>
      );

      const tagGroup = screen.getByTestId('tag-group');
      expect(tagGroup).toHaveAttribute('id', 'custom-id');
      expect(tagGroup).toHaveAttribute('data-custom', 'test-value');

      // aria-label gets passed to the TagList element, not the TagGroup wrapper
      const tagList = screen.getByLabelText('Custom tag group');
      expect(tagList).toBeInTheDocument();
    });

    it('should merge className correctly', () => {
      render(
        <TagGroup data-testid="tag-group" className="custom-class">
          <Tag>Test Tag</Tag>
        </TagGroup>
      );

      const tagGroup = screen.getByTestId('tag-group');
      expect(tagGroup).toHaveClass('custom-class');
    });
  });

  describe('Ref forwarding', () => {
    it('should forward ref correctly', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <TagGroup ref={ref} data-testid="tag-group">
          <Tag>Test Tag</Tag>
        </TagGroup>
      );

      expect(ref.current).toBe(screen.getByTestId('tag-group'));
    });
  });
});

describe('Tag', () => {
  describe('Rendering', () => {
    it('should pass through DOM props', () => {
      render(
        <TagGroup>
          <Tag
            data-testid="tag"
            id="custom-tag-id"
            data-custom="tag-value"
            data-aria-describedby="tag-description"
            data-role="listitem"
          >
            Test Tag
          </Tag>
        </TagGroup>
      );

      const tag = screen.getByTestId('tag');
      expect(tag.id).toContain('custom-tag-id');
      expect(tag).toHaveAttribute('data-custom', 'tag-value');
      expect(tag).toHaveAttribute('data-aria-describedby', 'tag-description');
      expect(tag).toHaveAttribute('data-role', 'listitem');
    });

    it('should merge className correctly', () => {
      render(
        <TagGroup>
          <Tag data-testid="tag" className="custom-tag-class">
            Test Tag
          </Tag>
        </TagGroup>
      );

      const tag = screen.getByTestId('tag');
      expect(tag).toHaveClass('custom-tag-class');
    });

    it('should have data-size and data-color attributes', () => {
      render(
        <TagGroup>
          <Tag data-testid="tag" size="small" color="blue">
            Test Tag
          </Tag>
        </TagGroup>
      );

      const tag = screen.getByTestId('tag');
      expect(tag).toHaveAttribute('data-size', 'small');
      expect(tag).toHaveAttribute('data-color', 'blue');
    });

    it('should use inherited size and color from TagGroup', () => {
      render(
        <TagGroup size="normal" color="red">
          <Tag data-testid="tag">Test Tag</Tag>
        </TagGroup>
      );

      const tag = screen.getByTestId('tag');
      expect(tag).toHaveAttribute('data-size', 'normal');
      expect(tag).toHaveAttribute('data-color', 'red');
    });

    it('should override inherited size and color', () => {
      render(
        <TagGroup size="normal" color="red">
          <Tag data-testid="tag" size="small" color="blue">
            Test Tag
          </Tag>
        </TagGroup>
      );

      const tag = screen.getByTestId('tag');
      expect(tag).toHaveAttribute('data-size', 'small');
      expect(tag).toHaveAttribute('data-color', 'blue');
    });
  });

  describe('Interactive states', () => {
    it('should show check icon when selected in interactive mode', async () => {
      const user = userEvent.setup();
      render(
        <TagGroup selectionMode="single">
          <Tag id="interactive-tag">Interactive Tag</Tag>
        </TagGroup>
      );

      const tag = screen.getByText('Interactive Tag');
      await user.click(tag);

      // Check if the check icon appears with proper aria-label
      const checkIcon = screen.getByRole('img', { name: 'Selected Interactive Tag' });
      expect(checkIcon).toBeInTheDocument();
    });

    it('should handle single selection', async () => {
      const handleSelectionChange = vi.fn();

      render(
        <TagGroup selectionMode="single" onSelectionChange={handleSelectionChange}>
          <Tag id="tag1" data-testid="tag-1">
            Tag 1
          </Tag>
          <Tag id="tag2" data-testid="tag-2">
            Tag 2
          </Tag>
        </TagGroup>
      );

      const tag1 = screen.getByTestId('tag-1');
      const tag2 = screen.getByTestId('tag-2');
      await userEvent.click(tag1);

      expect(handleSelectionChange).toHaveBeenCalledTimes(1);
      expect(tag1).toHaveAttribute('aria-selected', 'true');
      expect(tag2).toHaveAttribute('aria-selected', 'false');
    });

    it('should handle multiple selection', async () => {
      const handleSelectionChange = vi.fn();

      render(
        <TagGroup selectionMode="multiple" onSelectionChange={handleSelectionChange}>
          <Tag id="tag1" data-testid="multi-tag-1">
            Tag 1
          </Tag>
          <Tag id="tag2" data-testid="multi-tag-2">
            Tag 2
          </Tag>
        </TagGroup>
      );

      const tag1 = screen.getByTestId('multi-tag-1');
      const tag2 = screen.getByTestId('multi-tag-2');

      await userEvent.click(tag1);
      await userEvent.click(tag2);

      screen.debug(undefined, 10000);
      expect(handleSelectionChange).toHaveBeenCalledTimes(2);
      expect(tag1).toHaveAttribute('aria-selected', 'true');
      expect(tag2).toHaveAttribute('aria-selected', 'true');
    });
  });

  describe('Remove functionality', () => {
    it('should show remove button when onRemove is provided', () => {
      const handleRemove = vi.fn();
      render(
        <TagGroup onRemove={handleRemove}>
          <Tag id="removable-tag">Removable Tag</Tag>
        </TagGroup>
      );

      // Remove button should be present (it contains a close icon)
      const removeButton = screen.getByRole('button');
      expect(removeButton).toBeInTheDocument();
      expect(removeButton).toHaveAttribute('aria-label', 'Remove Removable Tag');
    });

    it('should call onRemove when remove button is clicked', async () => {
      const user = userEvent.setup();
      const handleRemove = vi.fn();

      render(
        <TagGroup onRemove={handleRemove}>
          <Tag id="removable-tag">Removable Tag</Tag>
        </TagGroup>
      );

      const removeButton = screen.getByRole('button');
      await user.click(removeButton);

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });
  });

  describe('CodeTag', () => {
    describe('Rendering', () => {
      it('should render with default size (inherited)', () => {
        render(
          <TagGroup>
            <CodeTag data-testid="code-tag-default">Normal size code</CodeTag>
          </TagGroup>
        );

        expect(screen.getByTestId('code-tag-default')).toBeInTheDocument();

        const codeTag = screen.getByTestId('code-tag-default');
        expect(codeTag).toHaveAttribute('data-size', 'normal');
      });

      it('should render with small size', () => {
        render(
          <TagGroup>
            <CodeTag size="small" data-testid="code-tag-small">
              Small size code
            </CodeTag>
          </TagGroup>
        );

        expect(screen.getByTestId('code-tag-small')).toBeInTheDocument();

        const codeTag = screen.getByTestId('code-tag-small');
        expect(codeTag).toHaveAttribute('data-size', 'small');
      });

      it('should override inherited size', () => {
        render(
          <TagGroup size="normal">
            <CodeTag size="small" data-testid="code-tag-override">
              Overridden size code
            </CodeTag>
          </TagGroup>
        );

        expect(screen.getByTestId('code-tag-override')).toBeInTheDocument();

        const codeTag = screen.getByTestId('code-tag-override');
        expect(codeTag).toHaveAttribute('data-size', 'small');
      });

      it('should pass through DOM props', () => {
        render(
          <TagGroup>
            <CodeTag
              data-testid="code-tag"
              id="custom-code-id"
              data-custom="code-value"
              data-aria-describedby="code-description"
              data-role="code-item"
            >
              Test code
            </CodeTag>
          </TagGroup>
        );

        const codeTag = screen.getByTestId('code-tag');
        expect(codeTag).toHaveAttribute('data-custom', 'code-value');
        expect(codeTag).toHaveAttribute('data-aria-describedby', 'code-description');
        expect(codeTag).toHaveAttribute('data-role', 'code-item');
        expect(codeTag).toHaveAttribute('data-size', 'normal');
      });

      it('should merge className correctly', () => {
        render(
          <TagGroup>
            <CodeTag data-testid="code-tag" className="custom-code-class">
              Test code
            </CodeTag>
          </TagGroup>
        );

        const codeTag = screen.getByTestId('code-tag');
        expect(codeTag).toHaveClass('custom-code-class');
      });
    });
  });
});
