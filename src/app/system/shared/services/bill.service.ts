import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Bill } from "../models/bill.model";
import { BaseApi } from 'src/app/shared/core/base-api';

@Injectable()
export class BillService extends BaseApi{
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.put ('bill', bill);
  }

  getCurrency(base: string = "RUB"): Observable<any> {
      return this.http.get('http://data.fixer.io/api/latest?access_key=4b9647f7bb1c52b4c6b5cde00418de07')
  }
}
