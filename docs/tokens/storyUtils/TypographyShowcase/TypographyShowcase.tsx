import React from 'react';

import { TableWrapperStyle } from './TypographyShowcase.style';
import ThemeProvider from 'components/ThemeProvider';
import Typography from 'components/Typography';

const TypographyShowcase = () => {
  return (
    <ThemeProvider>
      <table css={TableWrapperStyle} width={'100%'}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Token</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Typography type={'headline01'}>Headline 01</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'headline02'}>Headline 02</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'headline03'}>Headline 03</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'headline04'}>Headline 04</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'headline05'}>Headline 05</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'title01'}>Title 01</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'title02'}>Title 02</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'title03'}>Title 03</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'label01'}>Label 01</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'label02'}>Label 02</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'label03'}>Label 03</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'body01'}>Body 01</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'body02'}>Body 02</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <Typography type={'body03'}>Body 03</Typography>
            </td>
            <td colSpan={2}>
              <table>
                <tr>
                  <td>$lineHeight.10</td>
                  <td>40px</td>
                </tr>
                <tr>
                  <td>$fontSize.9</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>$fontWeight.bold</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>$letterSpacing.0</td>
                  <td>0</td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </ThemeProvider>
  );
};

export default TypographyShowcase;
