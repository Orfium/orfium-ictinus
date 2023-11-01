import { withKnobs, boolean, array, select, text } from '@storybook/addon-knobs';
import ExpandCollapse from './ExpandCollapse';
import { Fragment } from 'react';

export default {
  title: 'Design System/ExpandCollapse',
  component: ExpandCollapse,
};

export const ExpandCollapseStory = {
  render: () => (
    <div>
      <ExpandCollapse
        isExpanded={boolean('isExpanded', false)}
        onChange={() => {}}
        textAndControl={(handleClick, expanded) => {
          return (
            <Fragment>
              <span>Text</span>
              <button onClick={handleClick}> {expanded ? 'collapse' : 'expand'}</button>
            </Fragment>
          );
        }}
      >
        {(expand) => {
          return (
            <div>
              <div>Some</div>
              <div>content</div>
              <div>here</div>
            </div>
          );
        }}
      </ExpandCollapse>
      <ExpandCollapse
        isExpanded={boolean('isExpanded', false)}
        onChange={() => {}}
        textAndControl={(handleClick) => {
          return (
            <Fragment>
              <span>Text</span>
              <button onClick={handleClick}>expand/collapse</button>
            </Fragment>
          );
        }}
      >
        {(expand) => {
          return (
            <div>
              <div>Some</div>
              <div>content</div>
              <div>here</div>
              <ExpandCollapse
                isExpanded={boolean('isExpanded', false)}
                onChange={() => {}}
                textAndControl={(handleClick) => {
                  return (
                    <Fragment>
                      <span>Text</span>
                      <button onClick={handleClick}>expand/collapse</button>
                    </Fragment>
                  );
                }}
              >
                {(expand) => {
                  return (
                    <div>
                      <div>Some</div>
                      <div>content</div>
                      <div>here</div>
                    </div>
                  );
                }}
              </ExpandCollapse>
            </div>
          );
        }}
      </ExpandCollapse>
      <ExpandCollapse
        isExpanded={boolean('isExpanded', false)}
        onChange={() => {}}
        textAndControl={(handleClick) => {
          return (
            <Fragment>
              <span>Text</span>
              <button onClick={handleClick}>expand/collapse</button>
            </Fragment>
          );
        }}
      >
        {(expand) => {
          return (
            <div>
              <div>Some</div>
              <div>content</div>
              <div>here</div>
            </div>
          );
        }}
      </ExpandCollapse>
    </div>
  ),

  name: 'ExpandCollapse',
};
