import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

export const TableWrapperStyle = (): SerializedStyles => css`
  width: 100%;
  th {
    text-align: left;
    font-weight: bold;
    padding: 10px;
    border-bottom: 1px solid #dedede;
  }
  tbody > tr {
    border: 1px solid #dedede;
    td:first-of-type {
      padding: 10px;
      width: 50%;
      vertical-align: middle;
    }
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: fixed;
    tr {
      &:not(:last-of-type) {
        border-bottom: 1px solid #dedede;
      }
      td {
        padding: 10px 0;
      }
    }
  }
`;
