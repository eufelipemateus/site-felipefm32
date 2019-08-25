import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundExceptionPageComponent } from './not-found-exception-page.component';
import {SharedModule} from '../../shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations:[NotFoundExceptionPageComponent]

})
export class NotFoundExceptionPageModule { }
