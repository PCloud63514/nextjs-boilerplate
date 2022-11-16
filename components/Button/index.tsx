import {ButtonHTMLAttributes} from "react";
import {SizeType, StrictPropsWithChildren, StyleType} from '@/types'
import * as Styled from './style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: SizeType;
    styleType: StyleType;
}

function Button({children, ...props}: StrictPropsWithChildren<ButtonProps>) {
    return (
        <Styled.Container {...props}>
            {children}
        </Styled.Container>
    )
}

Button.defaultProps = {
    size: SizeType.large,
    styleType: StyleType.primary,
};

export default Button