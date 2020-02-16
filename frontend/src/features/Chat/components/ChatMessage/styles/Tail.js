import styled, {css} from 'styled-components';

const tailAlignCss = ({align}) => {
  return css`
    border-${align}: 10px solid transparent;
    ${align}: -10px;
  `;
};

export const Tail = styled.span`
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid ${({backgroundColor}) => backgroundColor};

  ${tailAlignCss};
`;
