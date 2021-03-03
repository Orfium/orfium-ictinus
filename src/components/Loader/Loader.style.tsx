import styled from 'styled-components';

export const getDotsLayout = (delay: number, animation: string, left?: number) => `
    left: ${`${left}px` || ''};
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background-color: #cfcfcf;
    color: #cfcfcf;
    animation: ${animation};
    animation-delay: ${delay}s;
`;

export const Container = styled.div`
  align-self: center;
`;

export const Dots = styled.div`
  position: relative;
  ${getDotsLayout(0.5, 'dotFlashing 0.7s infinite linear alternate')}

  &::before {
    ${getDotsLayout(0, 'dotFlashing 0.7s infinite alternate', -10)}
  }

  &::after {
    ${getDotsLayout(0.7, 'dotFlashing 0.7s infinite alternate', 10)}
  }

  &::after,
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  @keyframes dotFlashing {
    0% {
      background-color: #e7e7e7;
    }
    50% {
      background-color: #dbdbdb;
    }
    100% {
      background-color: #cfcfcf;
    }
  }
`;
