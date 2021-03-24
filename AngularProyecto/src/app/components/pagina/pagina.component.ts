import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public title:string;
  public nombre:string;
  public apellido:string;

  constructor(private _route:ActivatedRoute,private _router:Router) { 
    this.title="Página de prueba";
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      this.nombre=params.nombre;
      this.apellido=params.apellido;
    });
  }

  redireccion(){
    this._router.navigate(['/pagina-de-pruebas','sergio','zamora']);
  }

}
