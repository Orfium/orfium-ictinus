import { css, SerializedStyles } from '@emotion/react';
import React, { Fragment } from 'react';
import { Theme } from '../../../theme';
import { flex } from '../../../theme/functions';
import { MatchingAction } from '../../AssetMatching';
import { AssetProps } from '../../AssetMatching/components/Asset';

const actionsMock: MatchingAction[] = [
  {
    text: 'Confirm',
    icon: 'checkmark',
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
  {
    text: 'Review Later',
    icon: 'clock',
    onClick: () => {
      alert('reviewed');
    },
  },
];

const rightSideData: AssetProps = {
  categories: [
    {
      title: 'Writers',
      categoryItems: ['George Michael', 'Mick Jagger', 'Keith Richards'],
      col_order: 1,
    },
  ],
  assetLinkedInfo: {
    title: (
      <Fragment>
        Linked Sound <br /> Recordings
      </Fragment>
    ),
    details: 234,
  },
  assetHeading: {
    top: 'Owned Composition',
    bottom: 'ISWC: KS39729323',
    main: 'Waiting for That Day',
    iconName: 'composition',
  },
};
const leftSideData: AssetProps = {
  categories: [
    {
      title: 'Artists',
      categoryItems: ['George Michael'],
      col_order: 1,
    },
    {
      title: 'Writers',
      categoryItems: ['George Michael'],
      col_order: 0,
    },
  ],
  assetLinkedInfo: {
    title: (
      <Fragment>
        Linked Sound <br /> Recordings
      </Fragment>
    ),
    details: 234,
  },
  assetHeading: {
    top: 'Owned Recording',
    bottom: 'ISWC: KS39729323',
    main: 'Too Funky',
    iconName: 'recordLabel',
  },
};

const customElement = (
  <div
    css={(theme: Theme): SerializedStyles => css`
      ${flex};
      width: 100%;
      flex-direction: column;
      padding: ${theme.spacing.md};
      border: 1px solid ${theme.utils.getColor('lightGray', 200)};
      border-radius: ${theme.spacing.xsm};
      :first-of-type {
        margin-right: ${theme.spacing.md};
      }
    `}
  >
    <h2>Custom Placeholder</h2>
    <button
      css={css`
        width: 150px;
        text-align: center;
      `}
      onClick={() => alert('custom action')}
    >
      Custom Action
    </button>
  </div>
);

export default {
  actionsMock,
  rightSideData,
  leftSideData,
  customElement,
};
