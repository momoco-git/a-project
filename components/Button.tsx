import { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { AppTheme } from '@/styles/themes';
import { boxShadow, transition } from './styles';
export type Color = 'primary' | 'secondary' | 'danger' | 'warning';

export type Props = {
  children: string;
  color?: Color;
  onClick: (event: HTMLButtonElement) => void;
};
export const getColors = (theme: AppTheme, color?: Color): SerializedStyles => {
  switch (color) {
    case 'primary':
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.button};
      `;
    case 'secondary':
      return css`
        color: ${theme.font.regular};
      `;
    case 'danger':
      return css`
        background: #dc3545e6;
        color: #e4ebf5e6;
      `;
    case 'warning':
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.warning};
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  ${({ theme, color }) => getColors(theme, color)};
  ${transition()}
  ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2)}
  &:hover {
    opacity: 0.9;
  }
  &:active {
    ${({ theme }) => boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  }
`;

Button.defaultProps = {
  color: 'primary',
};
