import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import {PeliculaService} from '../../services/peliculas.services';

@Component({
  selector: 'app-article',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public title:string;
  public peliculas:Pelicula[];
  public favorita:Pelicula;

  constructor(private _peliculaService:PeliculaService) {
    this.title="Peliculas";
    this.peliculas=_peliculaService.getPeliculas();
   }

  ngOnInit(): void {
    console.log(this._peliculaService.holaMundo);
  }

  mostrarFavorita(event){
    this.favorita=event.pelicula;
  }
}
