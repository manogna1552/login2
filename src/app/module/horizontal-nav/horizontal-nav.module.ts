import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalNavRoutingModule } from './horizontal-nav-routing.module';
import { HorizontalNavComponent } from '../Container/horizontal-nav/horizontal-nav.component';
import { MyMaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [HorizontalNavComponent],
  imports: [
    CommonModule,
    HorizontalNavRoutingModule,
    MyMaterialModule
  ],
  exports: [HorizontalNavComponent]
})
export class HorizontalNavModule { }
