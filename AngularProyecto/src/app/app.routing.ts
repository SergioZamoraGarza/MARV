//Importar los modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

//Importar componentes a los cuales quiero hacer pagina exclusiva
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
import {PaginaComponent} from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';

//Array de Rutas
const appRoutes : Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'blog',component:BlogComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'articles',component:PeliculasComponent},
    {path:'pagina-de-pruebas',component:PaginaComponent},
    {path:'pagina-de-pruebas/:nombre/:apellido',component:PaginaComponent},
    {path:'**',component:ErrorComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);

