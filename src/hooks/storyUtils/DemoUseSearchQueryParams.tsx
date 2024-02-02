import type { FCC } from 'react';
import React, { useEffect } from 'react';
import type { RouterProps } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useSearchQueryParams } from '../';

const DemoUseSearchQueryParams: FCC<{ initialEntries: string } & RouterProps> = (props) => {
  const searchQueryParams = useSearchQueryParams();
  const navigate = useNavigate();
  const url = decodeURIComponent(props.initialEntries.replace(/&amp;/g, '&'));

  useEffect(() => {
    navigate(decodeURI(url));
  }, [navigate, url]);

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

export default DemoUseSearchQueryParams;
