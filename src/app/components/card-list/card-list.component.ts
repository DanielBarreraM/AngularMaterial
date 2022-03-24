import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent{

  @Input() cards: Card[];
  @Input() loading: boolean;

  /** Evento para cambiar la tarea a anclada */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  /** Evento para cambiar la tarea a archivada */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

}
