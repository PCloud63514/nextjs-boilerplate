const path = require("path");

module.exports = {
    "stories": [
        // "../stories/**/*.stories.mdx",
        // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
        "../components/**/*.stories.@(js|jsx|ts|tsx)",
        "../features/**/*.stories.@(js|jsx|ts|tsx)",
        "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-addon-styled-component-theme/dist/preset",
        'storybook-addon-material-ui',
    ],
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    },
    staticDirs: ["./public"],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@/styles": path.resolve(__dirname, "../@styles"),
            "@/types": path.resolve(__dirname, "../@types"),
            "@/components": path.resolve(__dirname, "../components"),
            "@/features": path.resolve(__dirname, "../features"),
            "@/pages": path.resolve(__dirname, "../pages"),
            "@/utils": path.resolve(__dirname, "../utils"),
            "@public": path.resolve(__dirname, "../public/"),
        };

        return config;
    },
};