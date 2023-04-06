import { map } from 'lodash';
import React from 'react';
import { useTheme } from 'styled-components';
import typographyCollection from 'theme/tokens/semantic/variables/typography';

import { TableWrapperStyle } from './TypographyShowcase.style';
import {
  getComponentTokens,
  getTokensValue,
  parseCompositionToken,
} from '../../../../src/theme/tokens/utils';
import Typography from 'components/Typography';

const TypographyShowcase = () => {
  const theme = useTheme();
  const typographyArray = map(typographyCollection, (value, key) => ({ key, ...value }));

  const parsedTypographyCompositionToken = parseCompositionToken(typographyCollection);

  debugger;

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
        {typographyArray.map(({ key, value }) => (
          <tr key={key}>
            <td>
              <Typography type={key}>{key}</Typography>
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

export default TypographyShowcase;
