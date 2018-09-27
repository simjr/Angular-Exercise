import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
	//Recordar Orden de rutas (SI IMPORTA):
	// Primero las rutas estáticas, luego la predeterminada, y de último el comodín
	{ path: 'home/tab1', component: HomeComponent },
	{ path: 'home2/tab1', component: Home2Component },
	{ path: '', redirectTo: 'home/tab1', pathMatch: 'full'  },
	{ path: '**', redirectTo: 'home/tab1', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
