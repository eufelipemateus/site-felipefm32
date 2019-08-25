import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculoPageComponent } from './curriculo-page.component';
import {SharedModule} from '../../shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations:[CurriculoPageComponent]

})
export class CurriculoPageModule { }
