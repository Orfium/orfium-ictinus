import mocks from 'components/storyUtils/AssetMatchingShowcase/mocks';
import React from 'react';

import { render, fireEvent } from '../../../../test';
import SectionHeader from './SectionHeader';
import '@testing-library/jest-dom';

describe('Asset Matching - SectionHeader', () => {
  let matchingActions: any;
  beforeEach(() => {
    matchingActions = mocks.actionsMock;
  });

  it('should render toolbox with 4 matching actions', () => {
    const { getAllByTestId, getByTestId } = render(
      <SectionHeader styleType={'outlined'} score={100} matchingActions={matchingActions} />
    );

    const primaryActions = getAllByTestId('primary_action');

    const menuBtn = getByTestId('icon-button-menu_btn');
    expect(primaryActions.length).toBe(2);

    fireEvent.click(menuBtn);

    const secondaryActions = getAllByTestId('secondary_action');

    expect(secondaryActions.length).toBe(2);
  });

  it('should render toolbox with 3 matching actions and the menu button is not rendered', async () => {
    const { getAllByTestId, queryByTestId } = render(
      <SectionHeader
        styleType={'outlined'}
        score={100}
        matchingActions={[
          {
            text: 'Confirm',
            icon: 'check',
            onClick: () => {
              alert('confirmed');
            },
          },
          {
            text: 'Reject',
            icon: 'close',
            onClick: () => {
              alert('rejected');
            },
          },
          {
            text: 'Hide',
            icon: 'sight',
            onClick: () => {
              alert('hidden');
            },
          },
        ]}
      />
    );

    const primaryActions = getAllByTestId('primary_action');
    expect(primaryActions.length).toBe(3);

    const menuBtn = await queryByTestId('icon-button-menu_btn');
    expect(menuBtn).not.toBeInTheDocument();
  });

  it('should render toolbox with 2 matching actions and the menu button is not rendered', async () => {
    const { getAllByTestId, queryByTestId } = render(
      <SectionHeader
        styleType={'outlined'}
        score={100}
        matchingActions={[
          {
            text: 'Confirm',
            icon: 'check',
            onClick: () => {
              alert('confirmed');
            },
          },
          {
            text: 'Reject',
            icon: 'close',
            onClick: () => {
              alert('rejected');
            },
          },
        ]}
      />
    );

    const primaryActions = getAllByTestId('primary_action');

    expect(primaryActions.length).toBe(2);
    const menuBtn = await queryByTestId('icon-button-menu_btn');

    expect(menuBtn).not.toBeInTheDocument();
  });
});
