import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Emergency } from 'src/app/models/emergency.model';

@Component({
  selector: 'app-emergency-list',
  templateUrl: './emergency-list.component.html',
  styleUrls: ['./emergency-list.component.css']
})

export class EmergencyListComponent {

  @Input() emergencies: Emergency[];
  @Input() loading = false;

  @Output() onViewmore = new EventEmitter<Emergency>();
  @Output() onDelete = new EventEmitter<Emergency>();

}
