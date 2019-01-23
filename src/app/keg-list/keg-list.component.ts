import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KegComponent } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent  {
  @Input() childKegList: KegComponent[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(kegToEdit: KegComponent){
    this.clickSender.emit(kegToEdit);
  }

  title = 'kombucha';
  kombuchas: KegComponent[] = [
  new KegComponent('Health Aid', 'Dragonfruit', 3 ),
  new KegComponent('GT\'s Enlightened', 'Gingerberry', 5 )
];

  priceColor(currentKombucha){
    if (currentKombucha.price < 4){
      return "bg-info";
    } else {
      return "bg-success";
    }
  }



}
