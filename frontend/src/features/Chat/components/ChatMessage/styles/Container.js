import styled, { css } from 'styled-components';

import { get } from 'commons/utils/object/get';

const horizontalPositionCSS = ({ left }) => !left && css`
  justify-content: flex-end;
`;

// TODO: reuse
const backgroundColorCSS = ({ theme, backgroundColor }) => css`
  background-color: ${get(backgroundColor, theme.palette)};
`;

export const MessageRow = styled.div`
  display: flex;
  padding: 0 1rem;

  ${horizontalPositionCSS};
`;

const messageAlignCss = ({ align }) => css`
    border-top-${align}-radius: 0;
  `;

export const Message = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  box-shadow: 0 1px 0.5px rgba(0,0,0,.13);
  position: relative;
  border-radius: 7.5px;

  ${backgroundColorCSS};
  ${messageAlignCss};
`;
