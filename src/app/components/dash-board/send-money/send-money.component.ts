import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent {
  mobileNumber: any;
  isDisabled: boolean = true;
  constructor(private router: Router) {}
  onInputChange() {
    this.isDisabled = !/^[6-9]\d{9}$/.test(this.mobileNumber);
    console.log(this.isDisabled)
  }
  getList(){
    this.router.navigateByUrl('beneficiary-details');
  }

}
