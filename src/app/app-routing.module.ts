import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { BeneficiaryDetailsComponent } from './components/dash-board/beneficiary-details/beneficiary-details.component';
import { RefundPendingComponent } from './components/refund-pending/refund-pending.component';
import { TransactionReportComponent } from './components/transaction-report/transaction-report.component';

const routes: Routes = [
  {path:"",component:DashBoardComponent,children:[
    
  ]},
  {path:'refund',component:RefundPendingComponent},
  {path:'beneficiary-details',component:BeneficiaryDetailsComponent},
  {path:'transaction-reports',component:TransactionReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
