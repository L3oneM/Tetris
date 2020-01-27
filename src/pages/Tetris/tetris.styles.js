import styled from 'styled-components';

import bgImage from '../../images/wall.jpg';

export const TetrisContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    aside {
      margin-top: 15px;
    }
  }
`;
