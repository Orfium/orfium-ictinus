import { uniqueId } from 'lodash-es';
import type { FCC } from 'react';
import React, { useState } from 'react';

import {
  Icon,
  iconsSet as icons,
  Search,
  Typography,
  type AcceptedIconNames,
} from '@orfium/ictinus';

const IconographyShowcase: FCC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [iconsSet, setIconSet] = useState(icons);

  React.useEffect(() => {
    const newIconSet: Record<string, { title: string; icons: string[] }> = {};

    Object.keys(icons).forEach((set) => {
      newIconSet[set] = {
        ...icons[set],
        icons: icons[set].icons.filter((name: string) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      };
    });

    setIconSet(newIconSet as typeof icons);
  }, [searchTerm]);

  const totalResults = Object.values(iconsSet).reduce((acc, obj) => acc + obj.icons.length, 0);

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div css={{ width: '100%' }}>
          <Search
            placeholder="Search icon"
            sx={{ wrapper: { minWidth: 'unset', width: '100%' } }}
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            onClear={() => setSearchTerm('')}
          />
        </div>
      </div>

      <div>
        {totalResults ? (
          Object.keys(iconsSet).map((set) => {
            return iconsSet[set].icons.length > 0 ? (
              <div
                key={`${uniqueId(iconsSet[set].title)}`}
                css={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '32px 0' }}
              >
                <Typography variant="headline03" type="secondary">
                  {iconsSet[set].title}
                </Typography>
                <div css={{ display: 'flex', flexWrap: 'wrap', rowGap: '48px' }}>
                  {iconsSet[set].icons.map((icon: AcceptedIconNames) => {
                    return (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          flexBasis: '16.6%',
                        }}
                        key={`${uniqueId(iconsSet[set].title)}_${icon}`}
                      >
                        <div
                          style={{
                            display: 'flex',
                            gap: '8px',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <Icon name={icon} />
                        </div>
                        <Typography variant="label03" type="secondary">
                          {icon}
                        </Typography>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null;
          })
        ) : (
          <div
            css={{
              padding: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="label01" type="secondary">
              No results
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconographyShowcase;
