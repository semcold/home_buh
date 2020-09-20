import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'bus-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  rublik: number;
  dollar: number; 

  constructor() { }

  ngOnInit() {
    const {rates} = this.currency;
    this.rublik = this.bill.value*rates["RUB"];
    this.dollar = this.bill.value*rates['USD'];
   
  }

}
