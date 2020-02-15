import styled, {css} from 'styled-components';
import Paper from '@material-ui/core/Paper';

const horizontalPositionCSS = ({left}) => {
  return left && css`
    justify-content: flex-end;
  `;
};

// TODO: reuse
const backgroundColorCSS = ({ backgroundColor }) => {
  return backgroundColor && css`
    background-color: ${backgroundColor};
  `;
};

export const MessageRow = styled.div`
  display: flex;

  ${horizontalPositionCSS};
`;

export const Message = styled(Paper)`
  display: grid;
  grid-template-columns: auto min-content;

  ${backgroundColorCSS};
`;
