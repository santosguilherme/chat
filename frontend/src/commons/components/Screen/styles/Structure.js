import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'commons/utils/object/get';

export const Container = styled.div`
  height: 100%;

  display: grid;
  grid-template-rows: auto min-content;
`;

export const Content = styled.div`
  padding: 1rem;
  overflow-y: auto;
  align-content: ${({ alignContent }) => alignContent};
  background-color: ${({ theme, backgroundColor }) => get(backgroundColor, theme.palette)};

  display: grid;
  grid-row-gap: 1rem;
  grid-auto-rows: min-content;
`;

Content.defaultProps = {
  alignContent: 'start',
  backgroundColor: 'background.paper',
};

Content.propTypes = {
  alignContent: PropTypes.oneOf(['start', 'end']),
  backgroundColor: PropTypes.string,
};

export const Footer = styled.div`
  padding: 1rem;

  background-color: ${({ theme, backgroundColor }) => get(backgroundColor, theme.palette)};
`;

Footer.defaultProps = {
  backgroundColor: 'background.paper',
};

Footer.propTypes = {
  backgroundColor: PropTypes.string,
};
