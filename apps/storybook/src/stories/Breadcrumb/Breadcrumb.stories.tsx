import { Breadcrumb } from '@orfium/ictinus';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Route, MemoryRouter as Router, Link as RouterLink, Routes } from 'react-router-dom';
import { FIGMA_URL } from 'utils/common';
import BreadcrumbShowcase from '../storyUtils/BreadcrumbShowcase/BreadcrumbShowcase';
import Stack from '../storyUtils/Stack';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Updated Components/Breadcrumb',
  component: Breadcrumb,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Breadcrumb',
        url: `${FIGMA_URL}?node-id=11721%3A92484`,
      },
    ],
    controls: { disable: true },
  },
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const BasicBreadcrumbs: Story = {
  render: () => (
    <Stack>
      <Breadcrumb
        items={[
          { href: '/first-level', label: 'Level 1' },
          { href: '/second-level', label: 'Level 2' },
          { href: '/third-level', label: 'Level 3' },
          { href: '/forth-level', label: 'Level 4' },
          { href: '/fifth-level', label: 'Level 5' },
        ]}
      />
    </Stack>
  ),
  name: 'Basic Breadcrumbs',
};

export const GoBackTo: Story = {
  render: () => (
    <Stack>
      <Breadcrumb backTo={{ href: '/first-level', label: 'Level 1' }} />
    </Stack>
  ),
  name: 'Go Back To',
};

export const ThirdPartyRoutingLibrary: Story = {
  render: () => (
    <Stack>
      <Router>
        <Breadcrumb
          items={[
            { href: '/first-level', label: 'Level 1', component: RouterLink },
            { href: '/second-level', label: 'Level 2', component: RouterLink },
            { href: '/third-level', label: 'Level 3', component: RouterLink },
            { href: '/forth-level', label: 'Level 4', component: RouterLink },
            { href: '/fifth-level', label: 'Level 5', component: RouterLink },
          ]}
        />
        <Routes>
          <Route
            path="/first-level"
            element={<div style={{ marginTop: '8px' }}>Current: Level 1</div>}
          />
          <Route
            path="/second-level"
            element={<div style={{ marginTop: '8px' }}>Current: Level 2</div>}
          />
          <Route
            path="/third-level"
            element={<div style={{ marginTop: '8px' }}>Current: Level 3</div>}
          />
          <Route
            path="/forth-level"
            element={<div style={{ marginTop: '8px' }}>Current: Level 4</div>}
          />
          <Route
            path="/fifth-level"
            element={<div style={{ marginTop: '8px' }}>Current: Level 5</div>}
          />
        </Routes>
      </Router>
    </Stack>
  ),

  name: 'Third-party Routing Library',
};

export const Playground: Story = {
  render: () => (
    <Stack>
      <Router>
        <BreadcrumbShowcase
          initData={[
            { href: '/first-level', label: 'Level 1' },
            { href: '/second-level', label: 'Level 2' },
          ]}
        />
      </Router>
    </Stack>
  ),
  name: 'Playground',
};
