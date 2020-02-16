import styled from 'styled-components';
import { darken } from '@material-ui/core/styles';

export const BackgroudPrimary = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-color: ${({ theme }) => darken(theme.palette.primary.main, 0.3)};
    grid-area: 1 / 1 / 3 / 4;
  }
`;

export const BackgroudSecondary = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    background-color: ${({ theme }) => theme.palette.background.default};
    grid-area: 3 / 1 / 6 / 4;
  }
`;
