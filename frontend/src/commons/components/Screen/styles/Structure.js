import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-template-rows: 1rem auto 1rem min-content 1rem;
  grid-template-areas:
    ". . ."
    ". content ."
    ". . ."
    ". footer ."
    ". . .";
`;

export const Content = styled.div`
  grid-area: content;
  overflow: auto;

  display: grid;
  grid-row-gap: 1rem;
  grid-auto-rows: min-content;
`;

export const Footer = styled.div`
  grid-area: footer;
`;
