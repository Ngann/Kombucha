import { Component } from '@angular/core';
import { KegComponent } from './keg/keg.component';
import { editKeg } from './keg/keg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kombucha';
  kombuchas: KegComponent[] = [
  new KegComponent('Health Aid', 'Dragonfruit', 5 ),
  new KegComponent('GT\'s Enlightened', 'Gingerberry', 5 )
];

}
