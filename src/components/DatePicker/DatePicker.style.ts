import { Theme } from 'theme';
import { css, SerializedStyles } from '@emotion/core';

export const optionStyle = ({ selected }: { selected?: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  white-space: nowrap;
  padding: 15px;
  font-weight: ${selected ? 'bold' : 'initial'};
`;

export const datePickerStyles = () => (theme: Theme): SerializedStyles => css`
  .DayPickerInput-Overlay {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    border: 1px solid #dfdfdf;
    border-radius: 4px;
  }
  .DayPicker-Months {
    flex-wrap: nowrap;
  }
  .DayPicker-Caption {
    text-align: center;
    font-size: ${theme.typography[14]};
    margin: ${theme.spacing.xsm} 0 ${theme.spacing.md} 0;
  }

  .DayPicker-NavButton {
    top: ${theme.spacing.md};

    &.DayPicker-NavButton--prev {
      left: ${theme.spacing.md};
    }
  }

  .DayPicker-Weekday {
    color: #9b9b9b;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    font-size: ${theme.typography[12]};
    padding: ${theme.spacing.md} 0;
  }

  .DayPicker-Day {
    padding: 0.7em;
    font-size: ${theme.typography[14]};
  }
  .DayPicker-Day--today {
    color: initial;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside),
  .DayPicker-Day--start:not(.DayPicker-Day--outside) {
    background-color: #dfdfdf;
    color: #000;
  }

  .DayPicker-Day:hover {
    background-color: #f5f5f5 !important;
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    border-radius: 100% !important;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f5f5f5 !important;
    border-radius: 0;
  }
  .DayPicker-Day {
    border-radius: 0 !important;
  }
  .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`;
