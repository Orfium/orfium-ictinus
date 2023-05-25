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
      <thead>
        <tr>
          <th>Type</th>
          <th>Token</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {typographyArray.map(({ key, description, value }) => (
          <tr key={key}>
            <td>
              <Typography variant={key as TypographyVariant}>{key}</Typography>
              <Typography variant={'body02'}>{description}</Typography>
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
