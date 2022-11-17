import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from "."

export default {
    title: "shard/Button",
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const PrimaryTemplate = Template.bind({});
export const SecondaryTemplate = Template.bind({});

PrimaryTemplate.args = {
    styleType: 'primary',
    children: "시작하기",
};

SecondaryTemplate.args = {
    styleType: 'secondary',
    children: "시작하기",
};
