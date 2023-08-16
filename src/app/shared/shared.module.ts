import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzIconModule,
    NzCarouselModule,
    NzButtonModule
  ],
  exports: [
    CommonModule,
    NzIconModule,
    NzCarouselModule,
    NzButtonModule
  ]
})

export class SharedModule { }
