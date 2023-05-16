import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HeaderComponent } from './components/header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { SendMoneyComponent } from './components/dash-board/send-money/send-money.component';
import { RefundPendingComponent } from './components/refund-pending/refund-pending.component';
import { TransactionReportComponent } from './components/transaction-report/transaction-report.component';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { BeneficiaryDetailsComponent } from './components/dash-board/beneficiary-details/beneficiary-details.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HeaderComponent,
    SendMoneyComponent,
    RefundPendingComponent,
    TransactionReportComponent,
    BeneficiaryDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    BrowserModule,
    MatTableModule,MatIconModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    MatTabsModule,
    NgbModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
