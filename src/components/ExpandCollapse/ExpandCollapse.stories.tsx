import ExpandCollapse from './ExpandCollapse';
import { Fragment } from 'react';

export default {
  title: 'Original Components/ExpandCollapse',
  component: ExpandCollapse,

  parameters: {
    controls: { disable: true },
  },
};

export const ExpandCollapseStory = {
  render: () => (
    <div>
      <ExpandCollapse
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
