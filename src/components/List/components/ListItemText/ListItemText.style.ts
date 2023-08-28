import styled from '@emotion/styled';

export const ListItemTextWrapper = styled('div', { target: '' })<{
  isGroupItem?: boolean;
  isHighlighted: boolean;
}>`
  color: ${({ theme }) => theme.tokens.colors.get('textColor.light.primary')};
  font-size: ${({ theme }) => theme.globals.typography.fontSize.get('4')};
  font-weight: ${({ isGroupItem, isHighlighted }) =>
    isGroupItem || isHighlighted ? 'bold' : 'initial'};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    font-weight: bold;
  }

  span {
    display: block;
  }
`;
