import { Injectable, OnInit } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { workOrderDetailService } from './work-order-details-services';
import { Observable } from 'rxjs';
import { workOrderDetail } from './workOrderDetail';

@Injectable({
    providedIn : 'root'
})
export class WorkorderDetailResolve implements Resolve<workOrderDetail>, OnInit{
    private WONumner = 0;
    constructor(private WOService: workOrderDetailService
                , private router: ActivatedRoute){
                   //this.WONumner = +this.router.snapshot.paramMap.get("id");
                }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<workOrderDetail>{
        this.WONumner = +route.paramMap.get("WO");
       return this.WOService.getWorkOrderDetail(this.WONumner.toString());
    }

    ngOnInit(){

    }
}