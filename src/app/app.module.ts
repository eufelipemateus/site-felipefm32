import { NgModule } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga'

import { AppComponent } from './app.component';
import {PagesModule} from './pages/pages.module';
import {SeoService} from './seo.service';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
	  SharedModule,
	  Angulartics2Module.forRoot(),
    PagesModule
  ],
  providers: [
	  SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
