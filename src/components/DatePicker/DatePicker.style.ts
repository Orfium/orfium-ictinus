import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import FatArrowLeft from '../Icon/assets/fat-arrow-left.svg';
import FatArrowRight from '../Icon/assets/fat-arrow-right.svg';

export const optionStyle = ({ selected }: { selected?: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  white-space: nowrap;
  padding: ${theme.spacing.md};
  font-weight: ${selected ? 'bold' : 'initial'};
  cursor: pointer;
`;

export const datePickerStyles = ({ isRangePicker }: { isRangePicker?: boolean }) => (
  theme: Theme
): SerializedStyles => css`
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
    margin: ${theme.spacing.sm} 0 ${theme.spacing.md} 0;
  }

  .DayPicker-NavButton {
    top: ${theme.spacing.sm};
    background-color: #f5f5f5;
    width: 42px;
    height: 42px;
    border-radius: 5px;

    &.DayPicker-NavButton--prev {
      left: ${theme.spacing.md};
      background-image: url(${FatArrowLeft});
    }

    &.DayPicker-NavButton--next {
      background-image: url(${FatArrowRight});
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
    border-radius: 0;
  }
  .DayPicker-Day--today {
    color: initial;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--outside),
  .DayPicker-Day--start:not(.DayPicker-Day--outside) {
    background-color: #dfdfdf;
    color: ${theme.palette.black};
  }

  .DayPicker-Day--selected.DayPicker-Day--disabled:not(.DayPicker-Day--outside) {
    opacity: 0.5;
  }

  .DayPicker-Day:focus {
    outline: none;
  }

  .DayPicker-Day:not(.DayPicker-Day--disabled):hover {
    background-color: #f5f5f5 !important;
  }
  .DayPicker:not(.DayPicker--interactionDisabled) {
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      border-radius: 100% !important;
    }
  }

  ${isRangePicker &&
    `
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: #f5f5f5 !important;
      border-radius: 0;
    }
    
    .DayPicker-Day {
      border-radius: 0 !important;
    }
  `}

  .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`;
