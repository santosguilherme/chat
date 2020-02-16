import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const StyledTextField = styled(TextField)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  grid-area: input;
`;
