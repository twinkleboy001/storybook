import React from 'react';
import Skeleton from './Skeleton';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import type { Story, Meta } from '@storybook/react';

export default {
  title: 'Skeleton',
  component: Skeleton,
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: 'mobile2',
    },
    // jest: ['Skeleton.test.js'],
  },
} as Meta;

const Template: Story = (args) => <Skeleton {...args} />;

export const SkeletonExample = Template.bind({});
SkeletonExample.storyName = 'Skeleton';
SkeletonExample.args = {};
