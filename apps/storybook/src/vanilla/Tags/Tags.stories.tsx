import { BookmarkIcon, Box, CodeTag, Tag, TagGroup, Text } from '@orfium/ictinus/vanilla';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta<typeof TagGroup> = {
  title: 'Vanilla/Tag',
  component: TagGroup,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

export const ReadOnlyTags: Story = {
  name: 'Read-only Tags',
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" padding="lg">
      <TagGroup aria-label="Color tag examples">
        <Tag id="default">Default</Tag>
        <Tag id="blue" color="blue">
          Blue
        </Tag>
        <Tag id="red" color="red">
          Red
        </Tag>
        <Tag id="purple" color="purple">
          Purple
        </Tag>
        <Tag id="teal" color="teal">
          Teal
        </Tag>
        <Tag id="orange" color="orange">
          Orange
        </Tag>
      </TagGroup>
    </Box>
  ),
};

export const ReadOnlyTagsWithIcons: Story = {
  name: 'Read-only Tags with Icons',
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" padding="lg">
      <TagGroup aria-label="Icon tag examples">
        <Tag id="default" textValue="Default">
          <BookmarkIcon aria-hidden="true" />
          <Text>Default</Text>
        </Tag>
        <Tag id="blue" color="blue" textValue="Blue">
          <BookmarkIcon aria-hidden="true" />
          <Text>Blue</Text>
        </Tag>
        <Tag id="red" color="red" textValue="Red">
          <BookmarkIcon aria-hidden="true" />
          <Text>Red</Text>
        </Tag>
        <Tag id="purple" color="purple" textValue="Purple">
          <BookmarkIcon aria-hidden="true" />
          <Text>Purple</Text>
        </Tag>
        <Tag id="teal" color="teal" textValue="Teal">
          <BookmarkIcon aria-hidden="true" />
          <Text>Teal</Text>
        </Tag>
        <Tag id="orange" color="orange" textValue="Orange">
          <BookmarkIcon aria-hidden="true" />
          <Text>Orange</Text>
        </Tag>
      </TagGroup>
    </Box>
  ),
};

export const ReadOnlyCodeTags: Story = {
  name: 'Read-only Code Tags',
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" padding="lg">
      <TagGroup aria-label="Code tag examples">
        <CodeTag>c0d31a831</CodeTag>
      </TagGroup>
    </Box>
  ),
};

export const SizesAndColors: Story = {
  name: 'Tag Sizes',
  render() {
    function TagSizesExample() {
      const [selectedKeysSmall, setSelectedKeysSmall] = React.useState<Set<string>>(
        new Set(['small-select1'])
      );
      const [selectedKeysNormal, setSelectedKeysNormal] = React.useState<Set<string>>(
        new Set(['normal-select1'])
      );
      const [removableTagsSmall, setRemovableTagsSmall] = React.useState([
        { id: 'small-remove1', label: 'Small' },
        { id: 'small-remove2', label: 'Small' },
      ]);
      const [removableTagsNormal, setRemovableTagsNormal] = React.useState([
        { id: 'normal-remove1', label: 'Normal' },
        { id: 'normal-remove2', label: 'Normal' },
      ]);

      const handleRemoveSmall = (tagId: string) => {
        setRemovableTagsSmall((prev) => prev.filter((tag) => tag.id !== tagId));
      };

      const handleRemoveNormal = (tagId: string) => {
        setRemovableTagsNormal((prev) => prev.filter((tag) => tag.id !== tagId));
      };

      return (
        <Box display="flex" flexDirection="column" gap="xl" padding="lg">
          {/* Read-only */}
          <Box display="flex" flexDirection="column" gap="lg">
            <Text typography="headline04">Read-only</Text>
            <Box display="flex" flexDirection="column" gap="md">
              <TagGroup size="small" aria-label="Small read-only tags">
                <Tag id="small-default">Small</Tag>
                <Tag id="small-blue" color="blue">
                  Small
                </Tag>
                <Tag id="small-red" color="red">
                  Small
                </Tag>
              </TagGroup>
              <TagGroup size="normal" aria-label="Normal read-only tags">
                <Tag id="normal-default">Normal</Tag>
                <Tag id="normal-blue" color="blue">
                  Normal
                </Tag>
                <Tag id="normal-red" color="red">
                  Normal
                </Tag>
              </TagGroup>
            </Box>
          </Box>

          {/* Read-only with Icons */}
          <Box display="flex" flexDirection="column" gap="lg">
            <Text typography="headline04">Read-only with Icons</Text>
            <Box display="flex" flexDirection="column" gap="md">
              <TagGroup size="small" aria-label="Small read-only icon tags">
                <Tag id="small-icon-default" textValue="Small">
                  <BookmarkIcon aria-hidden="true" />
                  <Text>Small</Text>
                </Tag>
                <Tag id="small-icon-blue" color="blue" textValue="Small">
                  <BookmarkIcon aria-hidden="true" />
                  <Text>Small</Text>
                </Tag>
                <Tag id="small-icon-red" color="red" textValue="Small">
                  <BookmarkIcon aria-hidden="true" />
                  <Text>Small</Text>
                </Tag>
              </TagGroup>
              <TagGroup size="normal" aria-label="Normal read-only icon tags">
                <Tag id="normal-icon-default" textValue="Normal">
                  <BookmarkIcon aria-hidden="true" />
                  <Text>Normal</Text>
                </Tag>
                <Tag id="normal-icon-blue" color="blue" textValue="Normal">
                  <BookmarkIcon aria-hidden="true" />
                  <Text>Normal</Text>
                </Tag>
                <Tag id="normal-icon-red" color="red" textValue="Normal">
                  <BookmarkIcon aria-hidden="true" />
                  <Text>Normal</Text>
                </Tag>
              </TagGroup>
            </Box>
          </Box>

          {/* Read-only Code*/}
          <Box display="flex" flexDirection="column" gap="lg">
            <Text typography="headline04">Read-only Code Tag</Text>
            <Box display="flex" flexDirection="column" gap="md">
              <TagGroup size="small" aria-label="Small read-only code tags">
                <CodeTag id="small-code">Small</CodeTag>
              </TagGroup>
              <TagGroup size="normal" aria-label="Normal read-only code tags">
                <CodeTag id="normal-code">Normal</CodeTag>
              </TagGroup>
            </Box>
          </Box>

          {/* Selectable */}
          <Box display="flex" flexDirection="column" gap="lg">
            <Text typography="headline04">Selectable</Text>
            <Box display="flex" flexDirection="column" gap="md">
              <TagGroup
                size="small"
                aria-label="Small multiple selection tags"
                selectionMode="multiple"
                selectedKeys={selectedKeysSmall}
                onSelectionChange={(keys) =>
                  setSelectedKeysSmall(new Set(Array.from(keys).map(String)))
                }
              >
                <Tag id="small-select1">Small</Tag>
              </TagGroup>
              <TagGroup
                size="normal"
                aria-label="Normal multiple selection tags"
                selectionMode="multiple"
                selectedKeys={selectedKeysNormal}
                onSelectionChange={(keys) =>
                  setSelectedKeysNormal(new Set(Array.from(keys).map(String)))
                }
              >
                <Tag id="normal-select1">Normal</Tag>
              </TagGroup>
            </Box>
          </Box>

          {/* Clearable */}
          <Box display="flex" flexDirection="column" gap="lg">
            <Text typography="headline04">Clearable</Text>
            <Box display="flex" flexDirection="column" gap="md">
              <TagGroup
                size="small"
                aria-label="Small removable tags"
                onRemove={(keys) => {
                  const keysArray = Array.from(keys);
                  keysArray.forEach((key) => handleRemoveSmall(key as string));
                }}
              >
                {removableTagsSmall.map((tag) => (
                  <Tag key={tag.id} id={tag.id} textValue={tag.label}>
                    <Text>{tag.label}</Text>
                  </Tag>
                ))}
              </TagGroup>
              <TagGroup
                size="normal"
                aria-label="Normal removable tags"
                onRemove={(keys) => {
                  const keysArray = Array.from(keys);
                  keysArray.forEach((key) => handleRemoveNormal(key as string));
                }}
              >
                {removableTagsNormal.map((tag) => (
                  <Tag key={tag.id} id={tag.id} textValue={tag.label}>
                    <Text>{tag.label}</Text>
                  </Tag>
                ))}
              </TagGroup>
            </Box>
          </Box>
        </Box>
      );
    }

    return <TagSizesExample />;
  },
};

export const SelectableTagsSingle: Story = {
  name: 'Selectable Tags - Single Selection',
  render() {
    function SelectableTagsExample() {
      const [selectedKey, setSelectedKey] = React.useState<string>('');

      return (
        <Box display="flex" flexDirection="column" gap="lg" padding="lg">
          <TagGroup
            aria-label="Technology selection"
            selectionMode="single"
            selectedKeys={selectedKey ? new Set([selectedKey]) : new Set()}
            onSelectionChange={(keys) => {
              const keysArray = Array.from(keys);
              setSelectedKey(keysArray.length > 0 ? String(keysArray[0]) : '');
            }}
          >
            <Tag id="frontend">Frontend</Tag>
            <Tag id="backend">Backend</Tag>
            <Tag id="fullstack">Full Stack</Tag>
            <Tag id="mobile">Mobile</Tag>
            <Tag id="devops">DevOps</Tag>
          </TagGroup>
          <Box>
            <strong>Selected:</strong> {selectedKey || 'None'}
          </Box>
        </Box>
      );
    }

    return <SelectableTagsExample />;
  },
};

export const SelectableTagsMultiple: Story = {
  name: 'Selectable Tags - Multiple Selection',
  render() {
    function SelectableTagsExample() {
      const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set());

      return (
        <Box display="flex" flexDirection="column" gap="lg" padding="lg">
          <TagGroup
            aria-label="Programming language selection"
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => setSelectedKeys(new Set(Array.from(keys).map(String)))}
          >
            <Tag id="javascript">JavaScript</Tag>
            <Tag id="python">Python</Tag>
            <Tag id="rust">Rust</Tag>
            <Tag id="go">Go</Tag>
            <Tag id="typescript">TypeScript</Tag>
          </TagGroup>
          <Box>
            <strong>Selected:</strong> {Array.from(selectedKeys).join(', ') || 'None'}
          </Box>
        </Box>
      );
    }

    return <SelectableTagsExample />;
  },
};

export const RemovableTags: Story = {
  name: 'Removable Tags',
  render() {
    function RemovableTagsExample() {
      const [tags, setTags] = React.useState([
        { id: 'urgent', label: 'Urgent' },
        { id: 'bug', label: 'Bug' },
        { id: 'feature', label: 'Feature Request' },
      ]);

      const handleRemove = (tagId: string) => {
        setTags((prev) => prev.filter((tag) => tag.id !== tagId));
      };

      return (
        <Box display="flex" flexDirection="column" gap="lg" padding="lg">
          <TagGroup
            aria-label="Removable task tags"
            onRemove={(keys) => {
              const keysArray = Array.from(keys);
              keysArray.forEach((key) => handleRemove(key as string));
            }}
          >
            {tags.map((tag) => (
              <Tag key={tag.id} id={tag.id} textValue={tag.label}>
                <Text>{tag.label}</Text>
              </Tag>
            ))}
          </TagGroup>
          <p>
            <strong>Remaining tags:</strong>{' '}
            {tags.length > 0 ? tags.map((tag) => tag.label).join(', ') : 'None'}
          </p>
        </Box>
      );
    }

    return <RemovableTagsExample />;
  },
};
