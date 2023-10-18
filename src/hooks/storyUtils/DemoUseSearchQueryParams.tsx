import React, { FC, useEffect } from 'react';
import { withRouter, RouterProps } from 'react-router-dom';

import { useSearchQueryParams } from '../';

const DemoUseSearchQueryParams: FC<{ initialEntries: string } & RouterProps> = (props) => {
  const searchQueryParams = useSearchQueryParams();
  const url = decodeURIComponent(props.initialEntries.replace(/&amp;/g, '&'));

  useEffect(() => {
    props.history.push(decodeURI(url));
  }, [props.history, url]);

  return (
    <div>
      <h1>useSearchQueryParams hook</h1>
      <p style={{ padding: '1.4rem', background: '#fff' }}>
        Given the url <code>{url}</code> the result of this hook is:
        <pre>
          <code>{JSON.stringify(searchQueryParams, null, 2)}</code>
        </pre>
      </p>
    </div>
  );
};

// @ts-ignore
export default withRouter(DemoUseSearchQueryParams) as React.ComponentType;
