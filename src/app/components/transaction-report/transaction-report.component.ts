
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css']
})
export class TransactionReportComponent implements AfterViewInit {
  displayedColumns: string[] = ['agentID', 'caNumber', 'transactionID', 'dateTime','amount','settlementType','category','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  agentID: string;
  caNumber: string;
  transactionID:string;
  dateTime: string;
  amount: string;
  settlementType:string;
  category:string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {agentID: 'M05305', caNumber: '76468800004234',transactionID:'67675564', dateTime: '15/09/2022 01:25 PM', amount: '₹0.00',settlementType:'None',category:'Verification'},
  {agentID: 'M05305', caNumber: 'XXXXXXXXXX4234',transactionID:'67675564', dateTime: '15/09/2022 01:25 PM', amount: '₹120.00',settlementType:'None',category:'Cash Widthdrawal'},
  {agentID: 'M05305', caNumber: 'XXXXXXXXXX4234',transactionID:'26764275564', dateTime: '15/09/2022 01:25 PM', amount: '₹43.00',settlementType:'Bank',category:'Verification'},

];