import { Component, OnInit } from '@angular/core';
import { workOrderDetailService } from '../services/work-order-details-services';
import { Router, ActivatedRoute } from '@angular/router';
import { workOrderDetail } from '../services/workOrderDetail';

@Component({
  selector: 'app-work-order-details',
  templateUrl: './work-order-details.component.html',
  styleUrls: ['./work-order-details.component.scss']
})
export class WorkOrderDetailsComponent implements OnInit {
  private WODetail: workOrderDetail = null;
  private WONumber: string = '';
  private ErrorMessage: string = '';
  
  constructor(private WOService: workOrderDetailService
              , private route: ActivatedRoute
              , private router: Router) {
                //this.WONumber =this.route.snapshot.paramMap.get('WO');
                // this.route.paramMap.subscribe(
                //   data => this.WONumber = data.get('WO')
                // );
               }

  ngOnInit() {
    
    // ***************************** Get the data from service ***************************************
    // this.WOService.getWorkOrderDetail(this.WONumber).subscribe(
    //   detail => {
    //     this.WODetail = detail;
    //     console.log(this.WODetail);
    //   },
    //   error => this.ErrorMessage = error
    // )

    // ******************************** Get the data from Route Resolver ****************************
    this.WODetail = this.route.snapshot.data['resolveData'];
  }

  GotoDashboard(): void {
    console.log('test');
    this.router.navigate(['/']);
  }
}
