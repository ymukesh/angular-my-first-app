import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertToSpaceComponent } from "./common/convert-to-space/convert-to-space.component";
import { WorkOrderDetailsComponent } from './work-order-details/work-order-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WorkorderDetailResolve } from './services/Work-order-detail-resolve';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpaceComponent,
    WorkOrderDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{ path: 'WODetail/:WO', component : WorkOrderDetailsComponent, resolve:{ resolveData : WorkorderDetailResolve } }
      { path: 'WODetail/:WO', component : WorkOrderDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
