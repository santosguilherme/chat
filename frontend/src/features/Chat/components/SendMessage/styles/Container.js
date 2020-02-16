import styled from 'styled-components';

export const SendMessageGrid = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-auto-columns: min-content;
  grid-template-columns: auto min-content;
  grid-template-areas:
    "input button";
`;
