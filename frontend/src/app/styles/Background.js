import styled from 'styled-components';
import { darken } from '@material-ui/core/styles';

export const BackgroudPrimary = styled.div`
  display: none;

  ${({ theme }) => `
    ${theme.breakpoints.up('md')} {
      display: block;
      background-color: ${darken(theme.palette.primary.main, 0.3)};
      grid-area: 1 / 1 / 3 / 4;
    }
  `}
`;

export const BackgroudSecondary = styled.div`
  display: none;

  ${({ theme }) => `
    ${theme.breakpoints.up('md')} {
      display: block;
      background-color: ${theme.palette.background.default};
      grid-area: 3 / 1 / 6 / 4;
    }
  `}
`;
