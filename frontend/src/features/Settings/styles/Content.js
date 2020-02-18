import styled, { css } from 'styled-components';

const maxWidthCSS = () => css`
  ${({ theme }) => `
    ${theme.breakpoints.up('sm')} {
      max-width: 544px;
    }

    ${theme.breakpoints.up('md')} {
      max-width: 440px;
    }
  `};
`;

export const MaxWidthContent = styled.div`
  ${maxWidthCSS};
`;
