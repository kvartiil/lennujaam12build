import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'elujoud-component',
  templateUrl: './elujoud.component.html',
  styleUrls: ['./elujoud.component.scss']
})
export class ElujoudComponent {
  products2 = "Siin on Märdi disainikuva esmane pilt:";

  share() {
    window.alert('The product has been shared!');
  }
}