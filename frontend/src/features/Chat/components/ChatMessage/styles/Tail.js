import styled, { css } from 'styled-components';

import get from 'commons/utils/object/get';

const tailAlignCss = ({ align }) => css`
  border-${align}: 10px solid transparent;
  ${align}: -10px;
`;

const borderColorCSS = ({ theme, backgroundColor }) => get(backgroundColor, theme.palette);

export const Tail = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid ${borderColorCSS};

  ${tailAlignCss};
`;
