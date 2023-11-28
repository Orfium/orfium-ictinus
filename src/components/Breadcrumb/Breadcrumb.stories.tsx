import { BrowserRouter as Router, Route, Switch, Link as RouterLink } from 'react-router-dom';
import BreadcrumbShowcase from '../storyUtils/BreadcrumbShowcase/BreadcrumbShowcase';
import Stack from '../storyUtils/Stack';
import Breadcrumb from './Breadcrumb';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Updated Components/Breadcrumb',
  component: () => true,

  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Breadcrumb',
        url: `${FIGMA_URL}?node-id=11721%3A92484`,
      },
    ],
  },
};

export const BasicBreadcrumbs = {
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

export const GoBackTo = {
  render: () => (
    <Stack>
      <Breadcrumb backTo={{ href: '/first-level', label: 'Level 1' }} />
    </Stack>
  ),
  name: 'Go Back To',
};

export const ThirdPartyRoutingLibrary = {
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
        <Switch>
          <Route path="/first-level">
            {() => <div style={{ marginTop: '8px' }}>Current: Level 1</div>}
          </Route>
          <Route path="/second-level">
            {() => <div style={{ marginTop: '8px' }}>Current: Level 2</div>}
          </Route>
          <Route path="/third-level">
            {() => <div style={{ marginTop: '8px' }}>Current: Level 3</div>}
          </Route>
          <Route path="/forth-level">
            {() => <div style={{ marginTop: '8px' }}>Current: Level 4</div>}
          </Route>
          <Route path="/fifth-level">
            {() => <div style={{ marginTop: '8px' }}>Current: Level 5</div>}
          </Route>
        </Switch>
      </Router>
    </Stack>
  ),

  name: 'Third-party Routing Library',
};

export const Playground = {
  render: () => (
    <Stack>
      <BreadcrumbShowcase
        initData={[
          { href: '/first-level', label: 'Level 1' },
          { href: '/second-level', label: 'Level 2' },
        ]}
      />
    </Stack>
  ),
  name: 'Playground',
};
