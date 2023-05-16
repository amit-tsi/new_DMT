import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private route: ActivatedRoute,
      private router: Router,
      private changeDetector: ChangeDetectorRef,){}
  navLinks = [
    {location:'',label:'Send Money'},
    { location: 'refund', label: 'Refund'},
    { location: 'transaction-reports', label: 'Reports'}
  ];
  
  
}
