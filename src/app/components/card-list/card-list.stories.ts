import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { CardListComponent } from './card-list.component';
import { CardComponent } from '../card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as CardStories from '../card/card.stories';

export default {
  component: CardListComponent,
  decorators: [
    moduleMetadata({
      // 👇 Importa ambos componentes para permitir la composición de componentes con Storybook
      declarations: [CardListComponent, CardComponent],
      imports: [
          CommonModule,
          MatCardModule,
          MatDividerModule,
          MatButtonModule,
          MatIconModule,
          MatToolbarModule,
          MatMenuModule,
          BrowserAnimationsModule
        ],
    }),
  ],
  title: 'CardList',
} as Meta;

const Template: Story<CardListComponent> = args => ({
  props: {
    ...args,
    onPinTask: CardStories.actionsData.onPinTask,
    onArchiveTask: CardStories.actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  cards: [
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
