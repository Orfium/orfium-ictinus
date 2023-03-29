import React, { FC } from 'react';

import { useSearchQueryParams } from '../';

const DemoUseSearchQueryParams: FC = () => {
  const searchQueryParams = useSearchQueryParams();

  return (
    <div>
      <h1>useSearchQueryParams hook</h1>
      <p style={{ padding: '1.4rem', background: '#fff' }}>
        Given the url{' '}
        <code>https://orfium-product.com/mypath?page=1&size=12&library=react&testing=yolo</code> the
        result of this hook is:
        <pre>
          <code>{JSON.stringify(searchQueryParams, null, 2)}</code>
        </pre>
      </p>
    </div>
  );
};

export default DemoUseSearchQueryParams;
