import { map } from 'lodash-es';
import React from 'react';
import {
  semanticVariablesTypography,
  type TypographyVariant,
  Typography,
  parseCompositionToken
} from '@orfium/ictinus';

import { TableWrapperStyle, innerTableStyle } from './TypographyTokensShowcase.style';

const TypographyTokensShowcase = () => {
  const typographyArray = map(semanticVariablesTypography.normal, (value, key) => ({ key, ...value }));

  const parsedTypographyCompositionToken = parseCompositionToken(
    semanticVariablesTypography.normal);

  return (
    <table css={TableWrapperStyle} width="100%">
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
              <Typography fontSpacing="mono" variant={key as TypographyVariant}>
                {key} (Mono)
              </Typography>
              <Typography variant="body01" type="secondary">
                {description}
              </Typography>
            </td>
            <td colSpan={1} css={innerTableStyle()}>
              <table>
                <tr>
                  <td>${value.lineHeight.slice(1, -1)}</td>
                </tr>
                <tr>
                  <td>${value.fontSize.slice(1, -1)}</td>
                </tr>
                <tr>
                  <td>${value.fontWeight.slice(1, -1)}</td>
                </tr>
                <tr>
                  <td>${value.letterSpacing.slice(1, -1)}</td>
                </tr>
              </table>
            </td>
            <td colSpan={1} css={innerTableStyle()}>
              <table>
                <tr>
                  <td>{parsedTypographyCompositionToken(`${key}`).lineHeight}</td>
                </tr>
                <tr>
                  <td>{parsedTypographyCompositionToken(`${key}`).fontSize}</td>
                </tr>
                <tr>
                  <td>{parsedTypographyCompositionToken(`${key}`).fontWeight}</td>
                </tr>
                <tr>
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
