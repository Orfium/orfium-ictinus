import { css, SerializedStyles } from '@emotion/react';

export const TableWrapperStyle = (): SerializedStyles => css`
  width: 100%;

  thead {
    border: 1px solid #e4e7ff;
  }

  th {
    text-align: left;
    font-weight: bold;
    padding: 10px;
    border-top: 1px solid #e4e7ff;
    border-bottom: 0;
  }

  td {
    vertical-align: top;
  }

  tbody > tr {
    border: 1px solid #e4e7ff;

    td:first-of-type {
      padding: 10px;
      width: 60%;
    }
  }
  tr {
    &:nth-child(even) table td {
      border-left: 1px solid #c2c8ff;
      border-bottom: 1px solid #c2c8ff;
    }
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: fixed;

    tr {
      td {
        width: 60%;
        padding: 21px 10px;
        color: #54587f;
        border-left: 1px solid #e4e7ff;
        border-bottom: 1px solid #e4e7ff;
        vertical-align: middle;
      }

      &:last-child {
        td {
          border-bottom: 0;
        }
      }
    }
  }
`;
