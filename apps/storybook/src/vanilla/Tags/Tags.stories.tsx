import {
  BookmarkIcon,
  Box,
  Tag,
  TagGroup,
  TagList,
  TagRemoveButton,
  Text,
} from '@orfium/ictinus/vanilla';
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
      <TagGroup>
        <TagList>
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
        </TagList>
      </TagGroup>
    </Box>
  ),
};

export const ReadOnlyTagsWithIcons: Story = {
  name: 'Read-only Tags with Icons',
  render: () => (
    <Box display="flex" flexDirection="column" gap="lg" padding="lg">
      <TagGroup>
        <TagList>
          <Tag id="default">
            <BookmarkIcon /> <Text>Default</Text>
          </Tag>
          <Tag id="blue" color="blue">
            <BookmarkIcon />
            <Text>Blue</Text>
          </Tag>
          <Tag id="red" color="red">
            <BookmarkIcon />
            <Text>Red</Text>
          </Tag>
          <Tag id="purple" color="purple">
            <BookmarkIcon />
            <Text>Purple</Text>
          </Tag>
          <Tag id="teal" color="teal">
            <BookmarkIcon />
            <Text>Teal</Text>
          </Tag>
          <Tag id="orange" color="orange">
            <BookmarkIcon />
            <Text>Orange</Text>
          </Tag>
        </TagList>
      </TagGroup>
    </Box>
  ),
};

export const SizesAndColors: Story = {
  name: 'Tag Sizes',
  render() {
    function TagSizesExample() {
      const [selectedKeysSmall, setSelectedKeysSmall] = React.useState<Set<string>>(new Set());
      const [selectedKeysNormal, setSelectedKeysNormal] = React.useState<Set<string>>(new Set());
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
              <TagGroup size="small">
                <TagList>
                  <Tag id="small-default">Small</Tag>
                  <Tag id="small-blue" color="blue">
                    Small
                  </Tag>
                  <Tag id="small-red" color="red">
                    Small
                  </Tag>
                </TagList>
              </TagGroup>
              <TagGroup size="normal">
                <TagList>
                  <Tag id="normal-default">Normal</Tag>
                  <Tag id="normal-blue" color="blue">
                    Normal
                  </Tag>
                  <Tag id="normal-red" color="red">
                    Normal
                  </Tag>
                </TagList>
              </TagGroup>
            </Box>
          </Box>

          {/* Read-only with Icons */}
          <Box display="flex" flexDirection="column" gap="lg">
            <Text typography="headline04">Read-only with Icons</Text>
            <Box display="flex" flexDirection="column" gap="md">
              <TagGroup size="small">
                <TagList>
                  <Tag id="small-icon-default">
                    <BookmarkIcon />
                    <Text>Small</Text>
                  </Tag>
                  <Tag id="small-icon-blue" color="blue">
                    <BookmarkIcon />
                    <Text>Small</Text>
                  </Tag>
                  <Tag id="small-icon-red" color="red">
                    <BookmarkIcon />
                    <Text>Small</Text>
                  </Tag>
                </TagList>
              </TagGroup>
              <TagGroup size="normal">
                <TagList>
                  <Tag id="normal-icon-default">
                    <BookmarkIcon />
                    <Text>Normal</Text>
                  </Tag>
                  <Tag id="normal-icon-blue" color="blue">
                    <BookmarkIcon />
                    <Text>Normal</Text>
                  </Tag>
                  <Tag id="normal-icon-red" color="red">
                    <BookmarkIcon />
                    Normal
                  </Tag>
                </TagList>
              </TagGroup>
            </Box>
          </Box>

          {/* Selectable */}
          <Box display="flex" flexDirection="column" gap="lg">
            <Text typography="headline04">Selectable</Text>
            <Box display="flex" flexDirection="column" gap="md">
              <TagGroup
                size="small"
                selectionMode="multiple"
                selectedKeys={selectedKeysSmall}
                onSelectionChange={(keys) =>
                  setSelectedKeysSmall(new Set(Array.from(keys).map(String)))
                }
              >
                <TagList>
                  <Tag id="small-select1">Small</Tag>
                </TagList>
              </TagGroup>
              <TagGroup
                size="normal"
                selectionMode="multiple"
                selectedKeys={selectedKeysNormal}
                onSelectionChange={(keys) =>
                  setSelectedKeysNormal(new Set(Array.from(keys).map(String)))
                }
              >
                <TagList>
                  <Tag id="normal-select1">Normal</Tag>
                </TagList>
              </TagGroup>
            </Box>
          </Box>

          {/* Clearable */}
          <Box display="flex" flexDirection="column" gap="lg">
            <Text typography="headline04">Clearable</Text>
            <Box display="flex" flexDirection="column" gap="md">
              <TagGroup
                size="small"
                onRemove={(keys) => {
                  const keysArray = Array.from(keys);
                  keysArray.forEach((key) => handleRemoveSmall(key as string));
                }}
              >
                <TagList>
                  {removableTagsSmall.map((tag) => (
                    <Tag key={tag.id} id={tag.id}>
                      <Text>{tag.label}</Text>
                      <TagRemoveButton />
                    </Tag>
                  ))}
                </TagList>
              </TagGroup>
              <TagGroup
                size="normal"
                onRemove={(keys) => {
                  const keysArray = Array.from(keys);
                  keysArray.forEach((key) => handleRemoveNormal(key as string));
                }}
              >
                <TagList>
                  {removableTagsNormal.map((tag) => (
                    <Tag key={tag.id} id={tag.id}>
                      <Text>{tag.label}</Text>
                      <TagRemoveButton />
                    </Tag>
                  ))}
                </TagList>
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
            selectionMode="single"
            selectedKeys={selectedKey ? new Set([selectedKey]) : new Set()}
            onSelectionChange={(keys) => {
              const keysArray = Array.from(keys);
              setSelectedKey(keysArray.length > 0 ? String(keysArray[0]) : '');
            }}
          >
            <TagList>
              <Tag id="frontend">Frontend</Tag>
              <Tag id="backend">Backend</Tag>
              <Tag id="fullstack">Full Stack</Tag>
              <Tag id="mobile">Mobile</Tag>
              <Tag id="devops">DevOps</Tag>
            </TagList>
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
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => setSelectedKeys(new Set(Array.from(keys).map(String)))}
          >
            <TagList>
              <Tag id="javascript">JavaScript</Tag>
              <Tag id="python">Python</Tag>
              <Tag id="rust">Rust</Tag>
              <Tag id="go">Go</Tag>
              <Tag id="typescript">TypeScript</Tag>
            </TagList>
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
            onRemove={(keys) => {
              const keysArray = Array.from(keys);
              keysArray.forEach((key) => handleRemove(key as string));
            }}
          >
            <TagList>
              {tags.map((tag) => (
                <Tag key={tag.id} id={tag.id}>
                  <Text>{tag.label}</Text>
                  <TagRemoveButton />
                </Tag>
              ))}
            </TagList>
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

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" padding="lg">
      <div>
        <TagGroup>
          <TagList>
            <Tag id="default1">Standard Tag</Tag>
            <Tag id="default2">Another Tag</Tag>
            <Tag id="default3">Third Tag</Tag>
          </TagList>
        </TagGroup>
      </div>

      <div>
        <TagGroup>
          <TagList>
            <Tag id="code1">useState</Tag>
            <Tag id="code2">useEffect</Tag>
            <Tag id="code3">useCallback</Tag>
          </TagList>
        </TagGroup>
      </div>

      <div>
        <TagGroup color="blue">
          <TagList>
            <Tag id="mixed1">Default Blue</Tag>
            <Tag id="mixed2">Code Blue</Tag>
            <Tag id="mixed3" size="small">
              Default Blue
            </Tag>
            <Tag id="mixed4" size="small">
              Code Blue
            </Tag>
          </TagList>
        </TagGroup>
      </div>

      <div>
        <TagGroup size="small">
          <TagList>
            <Tag id="small-code1">map()</Tag>
            <Tag id="small-code2">filter()</Tag>
            <Tag id="small-code3">reduce()</Tag>
          </TagList>
        </TagGroup>
      </div>
    </Box>
  ),
};

export const AllExamples: Story = {
  name: 'All Examples',
  render() {
    function AllExamplesComponent() {
      const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set());

      return (
        <Box
          display="flex"
          flexDirection="column"
          gap="3xl"
          padding="lg"
          style={{ maxWidth: '600px' }}
        >
          {/* Read-only tags */}
          <section>
            <Text typography="headline04" style={{ marginBottom: '1rem' }}>
              Read-only Tags
            </Text>
            <TagGroup>
              <TagList>
                <Tag id="react">React</Tag>
                <Tag id="typescript">TypeScript</Tag>
                <Tag id="vanilla-extract">Vanilla Extract</Tag>
              </TagList>
            </TagGroup>
          </section>

          {/* Selectable tags */}
          <section>
            <Text typography="headline04" style={{ marginBottom: '1rem' }}>
              Selectable tags
            </Text>
            <TagGroup
              selectionMode="multiple"
              selectedKeys={selectedKeys}
              onSelectionChange={(keys) => setSelectedKeys(new Set(Array.from(keys).map(String)))}
            >
              <TagList>
                <Tag id="javascript">JavaScript</Tag>
                <Tag id="python">Python</Tag>
                <Tag id="rust">Rust</Tag>
                <Tag id="go">Go</Tag>
              </TagList>
            </TagGroup>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Selected:</strong> {Array.from(selectedKeys).join(', ')}
            </p>
          </section>

          {/* Removable tags */}
          <section>
            <Text typography="headline04" style={{ marginBottom: '1rem' }}>
              Removable Tags
            </Text>
            <TagGroup>
              <TagList>
                <Tag id="urgent">
                  <Text>Urgent</Text>
                  <TagRemoveButton />
                </Tag>
                <Tag id="bug">
                  <Text>Bug</Text>
                  <TagRemoveButton />
                </Tag>
                <Tag id="feature">
                  <Text>Feature Request</Text>
                  <TagRemoveButton />
                </Tag>
              </TagList>
            </TagGroup>
          </section>

          {/* Different sizes and colors */}
          <section>
            <Text typography="headline04" style={{ marginBottom: '1rem' }}>
              Sizes and Colors
            </Text>
            <Box display="flex" flexDirection="column" gap="lg">
              <TagGroup size="small" color="blue">
                <TagList>
                  <Tag id="small1">Small</Tag>
                  <Tag id="small2">Blue</Tag>
                  <Tag id="small3">Tags</Tag>
                </TagList>
              </TagGroup>

              <TagGroup size="normal" color="red">
                <TagList>
                  <Tag id="red1" size="small">
                    Error
                  </Tag>
                  <Tag id="red2">Critical</Tag>
                </TagList>
              </TagGroup>

              <TagGroup size="normal" color="purple">
                <TagList>
                  <Tag id="purple1">Premium</Tag>
                  <Tag id="purple2">VIP</Tag>
                </TagList>
              </TagGroup>
            </Box>
          </section>
        </Box>
      );
    }

    return <AllExamplesComponent />;
  },
};
