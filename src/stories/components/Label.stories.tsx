import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "../../components/Label";

export default {
  title: "UI/Label",
  component: Label,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" }, //se puede dar que Stroybook detecte que es un componente relacionado con el color y asigne el control de manera automatica
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false,
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};
export const FontColor = Template.bind({});
FontColor.args = {
  size: "normal",
};
