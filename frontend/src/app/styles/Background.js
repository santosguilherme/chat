import styled from 'styled-components';

export const BackgroudPrimary = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-color: yellow;
    grid-area: 1 / 1 / 3 / 4;
  }
`;
export const BackgroudSecondary = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-color: greenyellow;
    grid-area: 3 / 1 / 6 / 4;
  }
`;
