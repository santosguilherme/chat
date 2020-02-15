import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const backgroundColorCSS = ({ backgroundColor }) => {
  return backgroundColor && css`
    background-color: ${backgroundColor};
  `;
};

export const Container = styled.div`
  height: 100%;

  display: grid;
  grid-template-rows: auto min-content;
`;

export const Content = styled.div`
  padding: 1rem;
  overflow-y: auto;
  align-content: ${({ alignContent }) => alignContent};

  display: grid;
  grid-row-gap: 1rem;
  grid-auto-rows: min-content;

  ${backgroundColorCSS};
`;

Content.defaultProps = {
  alignContent: 'start',
};

Content.propTypes = {
  alignContent: PropTypes.oneOf(['start', 'end']),
};

export const Footer = styled.div`
  padding: 1rem;

  ${backgroundColorCSS};
`;
