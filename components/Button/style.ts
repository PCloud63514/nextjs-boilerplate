import styled, {css, CSSProp} from "styled-components";
import {SizeType, StyleType} from "@/types/styles";
import {ButtonProps} from "./index";

const styleTable: Record<StyleType, CSSProp<any>> = {
    primary: css`
    font-weight: 600;
    color: 'white';
    background-color: primary;
    &: hover {
      background-color: orange;
    }
  `,

    secondary: css`
    font-weight: 600;
    color: 'white';
    background-color: 'primary';
    border: 1px solid 'primary';
    &: hover {
      background-color: 'transparent';
    }
  `,

    tertiary: css`
    font-weight: 400;
    color: 'black';
    background-color: 'white';
  `,
};

const sizeTable: Record<SizeType, CSSProp<any>> = {
    small: css`
    padding: 0.25rem 0.938rem;
  `,
    medium: css`
    padding: 0.5rem 1.25rem;
  `,
    large: css`
    padding: 0.65rem 5.875rem;
  `,
};

export const Container = styled.button`
  border: none;
  border-radius: 50px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.5s;
  
  ${({size, styleType}: Pick<ButtonProps, "size" | "styleType" | "onClick">) => css`
    ${styleTable[styleType]}
    ${sizeTable[size]};
  `}
`;