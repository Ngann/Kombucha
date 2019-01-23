import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {
  public total: number = 12;
  constructor(public brand: string, public name: string, public price: number) { }

  KegComponent.editTotal() {
    this.total -=1;
    if (this.total < 10 ) {
      alert('running low');
    }
  }

  ngOnInit() {
  }
}
