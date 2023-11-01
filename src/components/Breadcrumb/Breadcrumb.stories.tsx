import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BreadcrumbShowcase from '../storyUtils/BreadcrumbShowcase/BreadcrumbShowcase';
import Stack from '../storyUtils/Stack';
import Breadcrumb from './Breadcrumb';
import { FIGMA_URL } from '../../utils/common';

export default {
  title: 'Design System/Breadcrumb',
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

export const SimpleBreadcrumbs = {
  render: () => (
    <Stack>
      <Breadcrumb>
        <div>Level 1</div>
        <div>Level 2</div>
        <div>Level 3</div>
      </Breadcrumb>
    </Stack>
  ),

  name: 'Simple Breadcrumbs',
};

export const ActiveBreadcrumbs = {
  render: () => (
    <Stack>
      <Router>
        <Breadcrumb
          data={[
            {
              to: '/first-level',
              label: 'Level 1',
            },
            {
              to: '/second-level',
              label: 'Level 2',
            },
            {
              to: '/third-level',
              label: 'Level 3',
            },
            {
              to: '/forth-level',
              label: 'Level 4',
            },
            {
              to: '/fifth-level',
              label: 'Level 5',
            },
          ]}
        />
        <Switch>
          <Route path="/first-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 1
              </div>
            )}
          </Route>
          <Route path="/second-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 2
              </div>
            )}
          </Route>
          <Route path="/third-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 3
              </div>
            )}
          </Route>
          <Route path="/forth-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 4
              </div>
            )}
          </Route>
          <Route path="/fifth-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 5
              </div>
            )}
          </Route>
        </Switch>
      </Router>
    </Stack>
  ),

  name: 'Active Breadcrumbs',
};

export const ActiveBreadcrumbsWithInactiveLastBreadcrumb = {
  render: () => (
    <Stack>
      <Router>
        <Breadcrumb
          data={[
            {
              to: '/first-level',
              label: 'Level 1',
            },
            {
              to: '/second-level',
              label: 'Level 2',
            },
            {
              to: '/third-level',
              label: 'Level 3',
            },
            {
              to: '/forth-level',
              label: 'Level 4',
            },
            {
              to: '',
              label: 'Level 5',
            },
          ]}
        />
        <Switch>
          <Route path="/first-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 1
              </div>
            )}
          </Route>
          <Route path="/second-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 2
              </div>
            )}
          </Route>
          <Route path="/third-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 3
              </div>
            )}
          </Route>
          <Route path="/forth-level">
            {() => (
              <div
                style={{
                  marginTop: '8px',
                }}
              >
                Current: Level 4
              </div>
            )}
          </Route>
        </Switch>
      </Router>
    </Stack>
  ),

  name: 'Active Breadcrumbs with inactive last breadcrumb',
};

export const BreadcrumbShowcaseStory = {
  render: () => (
    <Stack>
      <BreadcrumbShowcase
        initData={[
          {
            to: '/first-level',
            label: 'Level 1',
          },
          {
            to: '/second-level',
            label: 'Level 2',
          },
          {
            to: '/third-level',
            label: 'Level 3',
          },
          {
            to: '/forth-level',
            label: 'Level 4',
          },
          {
            to: '/fifth-level',
            label: 'Level 5',
          },
        ]}
      />
    </Stack>
  ),

  name: 'Breadcrumb showcase',
};
