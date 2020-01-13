import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Iusurance_Auto_Auction_WebSite';
  logo: string = './assets/images/IAAImages/iaalogo.jpg';
  //isVisible:boolean = true;
  workOrder: string = '';

  constructor(private router: Router){
    //this.isVisible = true;
  }

  redirectToWorkOrderDetail() {
    //this.isVisible = false;
    this.workOrder = '575561';
    this.router.navigate(['/WODetail/' + this.workOrder]);
  }
}
