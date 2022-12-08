import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Space from './space';
import Button from '../Button';
// import Title from '../typography/title/Title';

import type { Story, Meta } from '@storybook/react';

export default {
  title: 'Space',
  component: Space,
  decorators: [withDesign],
  argTypes: {
    direction: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'middle', 'large'],
      },
    },
    align: {
      control: {
        type: 'radio',
        options: ['start', 'end', 'center', 'baseline'],
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.online-ui.com.cn/file/0JkKRuNnMRDta0ZcGI2uG83Z/com-UI-Kit?node-id=2629%3A3',
    },
    // jest: ['Space.test.js'],
  },
} as Meta;

const Template: Story = (args) => (
  <Space {...args}>
    space
    <span>span</span>
    <div>
      <span>span1</span>
      <span>span2</span>
    </div>
    <Button btnType="primary">Button</Button>
    <Button disabled btnType="primary">
      Button-disabled
    </Button>
    {/* <Title type={'primary'}>Title</Title> */}
  </Space>
);

export const SpaceExample = Template.bind({});

SpaceExample.storyName = 'Space';

SpaceExample.args = {
  direction: 'horizontal',
  size: 30,
  align: 'center',
};
