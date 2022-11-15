import {ButtonHTMLAttributes} from "react";
import * as Styled from './style'
import {StrictPropsWithChildren} from "../../../@types/components";

const Size = {
    small: 'small',
    medium: 'medium',
    large: 'large'
} as const;

const StyleType = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary'
} as const;

export type Size = typeof Size[keyof typeof Size];
export type StyleType = typeof StyleType[keyof typeof StyleType];

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: Size;
    styleType: StyleType;
}

function Button({children, ...props}:StrictPropsWithChildren<Props>) {
    return (
        <Styled.Container {...props}>
            {children}
        </Styled.Container>
    )
}

Button.defaultProps = {
    size: Size.large,
    styleType: StyleType.primary,
};

export default Button;