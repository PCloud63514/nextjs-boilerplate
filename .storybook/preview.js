export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import {addDecorator} from "@storybook/react";
import {withThemesProvider} from "storybook-addon-styled-component-theme";
import {ThemeProvider} from "styled-components";
import {Theme} from '@/styles'

const themes = () => {
  return [Theme.LightMode, Theme.DarkMode];
};
addDecorator(withThemesProvider(themes()), ThemeProvider);