import { Box, Tag, TagGroup, TagList, TagRemoveButton } from '@orfium/ictinus/vanilla';
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

export const SizesAndColors: Story = {
  name: 'Tag Sizes',
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" padding="lg">
      <TagGroup size="small">
        <TagList>
          <Tag id="default">Small</Tag>
          <Tag id="blue" color="blue">
            Small
          </Tag>
          <Tag id="red" color="red">
            Small
          </Tag>
          <Tag id="purple" color="purple">
            Small
          </Tag>
          <Tag id="teal" color="teal">
            Small
          </Tag>
          <Tag id="orange" color="orange">
            Small
          </Tag>
        </TagList>
      </TagGroup>

      <TagGroup size="normal">
        <TagList>
          <Tag id="default">Normal</Tag>
          <Tag id="blue" color="blue">
            Normal
          </Tag>
          <Tag id="red" color="red">
            Normal
          </Tag>
          <Tag id="purple" color="purple">
            Normal
          </Tag>
          <Tag id="teal" color="teal">
            Normal
          </Tag>
          <Tag id="orange" color="orange">
            Normal
          </Tag>
        </TagList>
      </TagGroup>
    </Box>
  ),
};

export const SelectableTags: Story = {
  name: 'Selectable Tags',
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
            </TagList>
          </TagGroup>
          <Box>
            <strong>Selected:</strong> {Array.from(selectedKeys).join(', ')}
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
                  {tag.label}
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

export const WithDescriptionAndErrorMessage: Story = {
  name: 'With Description and Error Message',
  render: () => (
    <Box display="flex" flexDirection="column" gap="xl" padding="lg">
      <TagGroup>
        <TagList>
          <Tag id="react">React</Tag>
          <Tag id="vue">Vue</Tag>
          <Tag id="angular">Angular</Tag>
        </TagList>
      </TagGroup>

      <TagGroup>
        <TagList>
          <Tag id="invalid">Invalid Option</Tag>
        </TagList>
      </TagGroup>
    </Box>
  ),
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
            <h3 style={{ marginBottom: '1rem' }}>Read-only Tags</h3>
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
            <h3 style={{ marginBottom: '1rem' }}>Selectable tags</h3>
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
            <h3 style={{ marginBottom: '1rem' }}>Removable Tags</h3>
            <TagGroup>
              <TagList>
                <Tag id="urgent">
                  Urgent
                  <TagRemoveButton />
                </Tag>
                <Tag id="bug">
                  Bug
                  <TagRemoveButton />
                </Tag>
                <Tag id="feature">
                  Feature Request
                  <TagRemoveButton />
                </Tag>
              </TagList>
            </TagGroup>
          </section>

          {/* Different sizes and colors */}
          <section>
            <h3 style={{ marginBottom: '1rem' }}>Sizes and Colors</h3>
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
