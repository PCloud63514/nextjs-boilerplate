import Button from "."
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {StyleType} from '@/types'

export default {
    title: "shard/Button",
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const PrimaryTemplate = Template.bind({});
export const SecondaryTemplate = Template.bind({});
export const TertiaryTemplate = Template.bind({});

PrimaryTemplate.args = {
    styleType: StyleType.primary,
    children: "시작하기",
};

SecondaryTemplate.args = {
    styleType: StyleType.secondary,
    children: "시작하기",
};

TertiaryTemplate.args = {
    styleType: StyleType.tertiary,
    children: "시작하기",
};