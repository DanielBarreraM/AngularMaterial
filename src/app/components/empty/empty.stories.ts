import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { EmptyComponent } from './empty.component';

export default {
  component: EmptyComponent,
  decorators: [
    moduleMetadata({
      declarations: [EmptyComponent],
      imports: [
        CommonModule,
      ],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Empty',
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<EmptyComponent> = args => ({
  component: EmptyComponent,
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Empty = Template.bind({});
