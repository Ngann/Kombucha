import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { KegComponent } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kombucha';
  masterKombuchaList: KegComponent[] = [
  new KegComponent('Health Aid', 'Dragonfruit', 3 ),
  new KegComponent('GT\'s Enlightened', 'Gingerberry', 5 )
];

  selectedKeg: null;

  editKegInfo(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: KegComponent) {
    this.masterKombuchaList.push(newKeg);
  }
}
