import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  mobileNumber: any;
  isDisabled: boolean = true;
  constructor(private router: Router){}
  onInputChange() {
    this.isDisabled = !/^[6-9]\d{9}$/.test(this.mobileNumber);
    console.log(this.isDisabled)
  }
  getList(){
    this.router.navigateByUrl('beneficiary-details');
  }
}
