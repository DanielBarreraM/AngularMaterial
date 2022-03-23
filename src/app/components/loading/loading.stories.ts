import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { LoadingComponent } from './loading.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

export default {
  component: LoadingComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoadingComponent],
      imports: [
        CommonModule,
        MatProgressSpinnerModule
      ],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Loading',
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<LoadingComponent> = args => ({
  component: LoadingComponent,
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Loading = Template.bind({});
