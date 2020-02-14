import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const backgroundColorCSS = ({ backgroundColor }) => {
  return backgroundColor && css`
    background-color: ${backgroundColor};
  `;
};

export const Content = styled.div`
  padding: 1rem;
  flex: 1;
  overflow: auto;

  display: grid;
  grid-row-gap: 1rem;
  grid-auto-rows: min-content;

  ${backgroundColorCSS};
`;

export const Footer = styled.div`
  padding: 1rem;

  ${backgroundColorCSS};
`;
