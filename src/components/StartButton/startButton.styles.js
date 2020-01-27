import styled from 'styled-components';

export const StartButtonContainer = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  border: 4px solid #333;
  transition: 0.8s;

  &:hover {
    background-color: #000;
    border-color: #fff;
    transition: 0.8s;
  }
`;
