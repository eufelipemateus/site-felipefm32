import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Paginas
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CurriculoPageComponent } from './pages/curriculo-page/curriculo-page.component';
import { NotFoundExceptionPageComponent } from './pages/not-found-exception-page/not-found-exception-page.component';


const appRoutes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'contato', component: ContactPageComponent },
	{ path:'cv', component:CurriculoPageComponent},
  { path:'404',component: NotFoundExceptionPageComponent},
	{ path: '**',redirectTo: '404', pathMatch: 'full' } 
];



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}