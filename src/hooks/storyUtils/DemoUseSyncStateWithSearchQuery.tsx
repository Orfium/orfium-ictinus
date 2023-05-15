import React, { FC, useEffect } from 'react';
import { withRouter, RouterProps } from 'react-router-dom';

import { useSyncStateWithSearchQuery } from '../';

const DemoUseSearchQueryParams: FC = () => {
  const [searchParams, setSearchParams] = useSyncStateWithSearchQuery({
    page: 1,
    size: 12,
    q: 'yolo',
    library: 'react',
  });
  // //   const url = decodeURIComponent(props.initialEntries.replace(/&amp;/g, '&'));

  // useEffect(() => {
  //   props.history.push(decodeURI(url));
  // }, [props.history, url]);

  return (
    <div>
      <h1>useSyncStateWithSearchQuery hook</h1>
      <p style={{ padding: '1.4rem', background: '#fff' }}>
        Unfortunately you cannot see the result on the page URL because StoryBook is using an
        iframe. The below form fields change this state (and sync it with the URL):
        <pre>
          <code>{JSON.stringify(searchParams, null, 2)}</code>
        </pre>
      </p>
    </div>
  );
};

export default withRouter(DemoUseSearchQueryParams);
