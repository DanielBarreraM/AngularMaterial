import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { EmergencyListComponent } from './emergency-list.component';
import { CardComponent } from '../card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoadingComponent} from '../loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {EmptyComponent} from '../empty/empty.component';

import * as CardStories from '../card/card.stories';

export default {
  component: EmergencyListComponent,
  decorators: [
    moduleMetadata({
      // 👇 Importa ambos componentes para permitir la composición de componentes con Storybook
      declarations: [EmergencyListComponent, CardComponent, LoadingComponent, EmptyComponent],
      imports: [
          CommonModule,
          MatCardModule,
          MatDividerModule,
          MatButtonModule,
          MatIconModule,
          MatToolbarModule,
          MatMenuModule,
          BrowserAnimationsModule,
          MatProgressSpinnerModule
        ],
    }),
  ],
  title: 'CardList',
} as Meta;

const Template: Story<EmergencyListComponent> = args => ({
  props: {
    ...args,
    onPinTask: CardStories.actionsData.onPinTask,
    onArchiveTask: CardStories.actionsData.onArchiveTask,
  },
});

export const CardList = Template.bind({});
CardList.args = {
  emergencies: [
    {
      adress: 'calle blabvla',
      date: new Date(2017, 4, 4, 17, 23, 42, 11),
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
        adress: 'calle dfsd',
        date: new Date(2017, 4, 4, 17, 23, 42, 11),
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
        adress: 'calle tete',
        date: new Date(2017, 4, 4, 17, 23, 42, 11),
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
        adress: 'calle rere',
        date: new Date(2017, 4, 4, 17, 23, 42, 11),
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
        adress: 'calle rere',
        date: new Date(2017, 4, 4, 17, 23, 42, 11),
        img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
  ],
};

export const Loading_Empty = Template.bind({});
Loading_Empty.args = {
  emergencies: [
    CardList.args.emergencies[0],
    CardList.args.emergencies[1],
    CardList.args.emergencies[2],
    CardList.args.emergencies[3],
  ],
  loading: true,
};
