import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Footer } from './styles/Structure';

function Screen({ children }) {
  return (
    <Container>
      {children({ Content, Footer })}
    </Container>
  );
}

Screen.propTypes = {
  children: PropTypes.func.isRequired,
};

export default memo(Screen);
