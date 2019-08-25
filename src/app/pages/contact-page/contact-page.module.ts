import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageComponent } from './contact-page.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations:[ContactPageComponent]
})
export class ContactPageModule { }
