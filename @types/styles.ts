export type Theme = {
    COLOR: {
        PRIMARY: { DEFAULT: string };
        SECONDARY: { DEFAULT: string};
    },
    TEXT: {
        DEFAULT: string;
        DISABLED: string;
        PLACEHOLDER: string;
        LIGHT_BLUE: string;
        WHITE: string;
    }
}

export const SizeType = {
    small: 'small',
    medium: 'medium',
    large: 'large'
} as const;
export const StyleType = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary'
} as const;

export type SizeType = typeof SizeType[keyof typeof SizeType];
export type StyleType = typeof StyleType[keyof typeof StyleType];

Object.freeze(SizeType);
Object.freeze(StyleType);