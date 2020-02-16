import styled from 'styled-components';

export const Container = styled.main`
  height: 100%;

  @media screen and (min-width: 768px) {
    background-color: #ccc;

    display: grid;
    grid-template-rows: 1fr 1fr 4fr 4fr 1fr;
    grid-template-columns: 1fr 6fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-rows: 1fr 1fr 3fr 3fr 1fr;
  }
`;
export const Content = styled.main`
  height: 100%;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.06), 0 2px 5px 0 rgba(0,0,0,.2);
    z-index: 100;

    grid-column: 2;
    grid-row: 2 / 5;
  }
`;
