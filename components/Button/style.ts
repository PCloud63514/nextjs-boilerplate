import styled, {css, CSSProp} from "styled-components";
import {Components, Styles} from '@/types'
import {ButtonProps} from "@/types/components";

const styleTable: Record<ButtonProps["styleType"], CSSProp<Styles.ThemeType>> = {
    primary: css`
    font-weight: 600;
    ${({theme}:ThemeStyle) => css`
      color: ${theme.Palette.primaryText};
      background: ${theme.Palette.background};
    `}    
    &: hover {
      background-color: orange;
    }
  `,
  secondary: css`
    font-weight: 600;
    color: 'white';
    ${({theme}:ThemeStyle) => css`
      color: ${theme.Palette.secondaryText};
      background: ${theme.Palette.background};
    `}
    &: hover {
      background-color: 'transparent';
    }
  `
};

const sizeTable: Record<ButtonProps["size"], CSSProp<Styles.ThemeType>> = {
    small: css`
    padding: 0.25rem 0.938rem;
      ${({theme}:ThemeStyle) => css`
      font-size: ${theme.Font.Size.small};
    `}    
  `,
    medium: css`
    padding: 0.5rem 1.25rem;
      ${({theme}:ThemeStyle) => css`
      font-size: ${theme.Font.Size.medium};
    `}    
  `,
    large: css`
    padding: 0.65rem 5.875rem;
      ${({theme}:ThemeStyle) => css`
      font-size: ${theme.Font.Size.large};
      color: ${theme.Palette.primaryText};
      background: ${theme.Palette.background};
    `}    
  `,
};

export const Container = styled.button`
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.5s;
  
  ${({size, styleType}: Pick<Components.ButtonProps, "size" | "styleType" | "onClick">) => css`
    ${styleTable[styleType]}
    ${sizeTable[size]};
  `}
`;