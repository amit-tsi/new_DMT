
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-refund-pending',
  templateUrl: './refund-pending.component.html',
  styleUrls: ['./refund-pending.component.css']
})
export class RefundPendingComponent implements AfterViewInit {
  displayedColumns: string[] = ['transactionID', 'acNumber', 'dateTime', 'senderNo','amount','otp','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  transactionID: number;
  acNumber: number;
  dateTime: string;
  senderNo: number;
  amount: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},
  {transactionID: 76468800004234, acNumber: 67675564, dateTime: '15/09/2022 01:25 PM', senderNo: 9876545543,amount:'₹2,300.00'},

];
