import { Component } from '@angular/core';
import { KegComponent } from './keg/keg.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
