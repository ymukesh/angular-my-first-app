import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';
import { workOrderDetail } from './workOrderDetail';

@Injectable({
    providedIn: 'root'
})
export class workOrderDetailService implements OnInit{
    private WoDetailData: any;
    private workOrderDetailUrl: string = `https://dev.providerservices.iaai.com/api/CoreTrack/GetWorkOrderInfo?`;
    constructor(private http: HttpClient){
    }

    getWorkOrderDetail(WO: string = ''): Observable<workOrderDetail> {
        debugger;
        this.workOrderDetailUrl = this.workOrderDetailUrl + `workOrderId=` + WO + `&summary=true&tab=claim`;
        console.log(this.workOrderDetailUrl);
        //return this.getWODetail<workOrderDetail>(WO);
        return this.http.get<workOrderDetail>(this.workOrderDetailUrl).pipe(
            map(data => data)
            //,catchError(this.handleError())
        );
    }

    handleError(err: HttpErrorResponse): any {
        let errormsg: string = err.error.message;
        console.error(errormsg);
        return throwError(errormsg);
    }

    getWODetail(WO: string): workOrderDetail{
        var objWODetail: workOrderDetail;
        objWODetail = {
            WorkOrderId: +WO,
            HandlerName: 'Mukesh',
            TwoHandlerName: 'Yadav',
            OwnerName: 'Manoj'
        }
        return objWODetail;
    }

    ngOnInit() {
    }

    //this.WoDetailData = "";

    
}