import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectHotelModule } from './select-hotel/select-hotel.module';
import { SharedModule } from './shared/shared.module';
import { HotelsModule } from './hotels-list/hotels.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [
    SharedModule
  ],
  imports: [
    HotelsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SelectHotelModule,
    SharedModule,
    NzLayoutModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_PT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
