import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageModule } from './home-page/home-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';
import { CurriculoPageModule } from './curriculo-page/curriculo-page.module';
import { NotFoundExceptionPageModule } from './not-found-exception-page/not-found-exception-page.module';


@NgModule({
  imports: [
    CommonModule,
    HomePageModule,
	ContactPageModule,
	CurriculoPageModule,
	NotFoundExceptionPageModule
  ]
})
export class PagesModule { }
