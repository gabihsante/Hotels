import { NgModule } from '@angular/core';
import { SelectHotelComponent } from './select-hotel.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        NzDrawerModule,
        SharedModule
    ],
    exports: [ 
        SelectHotelComponent ],
    declarations: [
        SelectHotelComponent
    ],
    providers: [],
})
export class SelectHotelModule { }
