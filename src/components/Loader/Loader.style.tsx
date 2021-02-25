import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
`;

export const Dots = styled.div`
  position: relative;
  width: 6px;
  height: 6px;
  border-radius: 5px;
  background-color: #cfcfcf;
  color: #cfcfcf;
  animation: dotFlashing 0.7s infinite linear alternate;
  animation-delay: 0.5s;

  &::after,
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -10px;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background-color: #cfcfcf;
    color: #cfcfcf;
    animation: dotFlashing 0.7s infinite alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 10px;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background-color: #cfcfcf;
    color: #cfcfcf;
    animation: dotFlashing 0.7s infinite alternate;
    animation-delay: 0.7s;
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
