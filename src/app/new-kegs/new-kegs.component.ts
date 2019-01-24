import { Component, Output, EventEmitter } from '@angular/core';
import { KegComponent } from '../models/keg.model';

@Component({
  selector: 'app-new-kegs',
  templateUrl: './new-kegs.component.html',
  styleUrls: ['./new-kegs.component.css']
})
export class NewKegsComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm(brand: string, name: string, price: number) {
    let newKeg: KegComponent = new KegComponent(brand, name, parseInt(price));
    this.sendKeg.emit(newKeg);

  }

  selectedHeader = null;

  newKegForm() {
    this.selectedHeader = true;
  }

  finishedEditingNew(){
    this.selectedHeader = null;
  }
}
