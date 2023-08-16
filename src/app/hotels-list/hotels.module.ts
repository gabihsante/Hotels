import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HotelsListComponent } from './hotels-list.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SharedModule } from '../shared/shared.module';

registerLocaleData(localePt, 'pt');

@NgModule({
    imports: [
        NzCardModule,
        NzListModule,
        NzInputModule,
        NzRateModule,
        NzBreadCrumbModule,
        NzAutocompleteModule,
        FormsModule,
        HttpClientModule,
        NzSelectModule,
        SharedModule
    ],
    exports: [HotelsListComponent],
    declarations: [HotelsListComponent],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt'
        },
        {
            provide:  DEFAULT_CURRENCY_CODE,
            useValue: 'BRL'
        }
    ],
})
export class HotelsModule { }
