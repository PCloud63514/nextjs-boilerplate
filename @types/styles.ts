export type PaletteType = {
    background: string,
    foreground: string,
    primary: string,
    primaryLight: string,
    primaryDark: string,
    secondary: string,
    secondaryLight: string,
    secondaryDark: string,
    primaryText: string,
    secondaryText: string
};

export type FontType = {
    Family : {
        primary: string,
        secondary: string
    },
    Size: {
        small: string,
        medium: string,
        large: string
    }
}

declare global {
    type ThemeStyle = {
        theme: ThemeType
    }
}

export type ThemeType = {
    name: string,
    Palette: PaletteType,
    Font: FontType
};