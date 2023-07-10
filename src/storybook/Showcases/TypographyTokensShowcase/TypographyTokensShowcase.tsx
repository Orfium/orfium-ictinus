import { map } from 'lodash';
import React from 'react';
import typographyCollection from 'theme/globals/constants/typography';
import { parseCompositionToken } from 'theme/tokens/utils';

import { TableWrapperStyle } from './TypographyTokensShowcase.style';
import Typography, { TypographyVariant } from 'components/Typography';

const TypographyTokensShowcase = () => {
  const typographyArray = map(typographyCollection, (value, key) => ({ key, ...value }));

  const parsedTypographyCompositionToken = parseCompositionToken(typographyCollection);

  return (
    <table css={TableWrapperStyle} width={'100%'}>
      <thead css={{ background: '#FFFFFF' }}>
        <tr>
          <th>Title & description</th>
          <th>token</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        {typographyArray.map(({ key, description, value }, index) => (
          <tr key={key} css={{ background: index % 2 !== 0 ? '#E7EEFE' : '#FFFFFF' }}>
            <td>
              <Typography variant={key as TypographyVariant}>{key}</Typography>
              <Typography variant={'body01'} type={'secondary'}>
                {description}
              </Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>${value.lineHeight.slice(1, -1)}</td>
                  <td>{parsedTypographyCompositionToken(`${key}`).lineHeight}</td>
                </tr>
                <tr>
                  <td>${value.fontSize.slice(1, -1)}</td>
                  <td>{parsedTypographyCompositionToken(`${key}`).fontSize}</td>
                </tr>
                <tr>
                  <td>${value.fontWeight.slice(1, -1)}</td>
                  <td>{parsedTypographyCompositionToken(`${key}`).fontWeight}</td>
                </tr>
                <tr>
                  <td>${value.letterSpacing.slice(1, -1)}</td>
                  <td>{parsedTypographyCompositionToken(`${key}`).letterSpacing}</td>
                </tr>
              </table>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TypographyTokensShowcase;