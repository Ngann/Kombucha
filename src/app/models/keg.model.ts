export class KegComponent {
  public total: number = 12;
  constructor(public brand: string, public name: string, public price: number) { }

  editTotal() {
    this.total -=1;
    if (this.total < 10 ) {
      alert('running low');
    } else{
    }
  }

}
