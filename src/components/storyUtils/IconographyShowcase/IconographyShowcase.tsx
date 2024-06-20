import { uniqueId } from 'lodash-es';
import type { FCC } from 'react';
import React, { useState } from 'react';

import type { AcceptedIconNames } from 'components/Icon';
import Icon from 'components/Icon';
import { iconsSet as icons } from 'components/Icon/constants';
import Search from 'components/Search';
import Typography from 'components/Typography';

const IconographyShowcase: FCC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [iconsSet, setIconSet] = useState(icons);

  React.useEffect(() => {
    const newIconSet = {};

    Object.keys(iconsSet).forEach((set) => {
      newIconSet[set] = {
        ...icons[set],
        icons: icons[set].icons.filter((name: string) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      };
    });

    setIconSet(newIconSet as typeof iconsSet);
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
            onChange={(e: any) => setSearchTerm(e.target.value)}
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
