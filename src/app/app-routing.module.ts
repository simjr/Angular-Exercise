import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	//Recordar Orden de rutas (SI IMPORTA):
	// Primero las rutas estáticas, luego la predeterminada, y de último el comodín
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: 'home', pathMatch: 'full'  },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
