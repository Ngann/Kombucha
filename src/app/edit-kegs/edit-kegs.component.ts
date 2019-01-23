import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KegComponent } from '../models/keg.model';

@Component({
  selector: 'app-edit-kegs',
  templateUrl: './edit-kegs.component.html',
  styleUrls: ['./edit-kegs.component.css']
})
export class EditKegsComponent {
  @Input() selectedKeg: KegComponent;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}
