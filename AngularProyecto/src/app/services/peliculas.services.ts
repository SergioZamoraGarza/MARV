import {Injectable} from '@angular/core';
import {Pelicula} from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas:Pelicula[];

    constructor(){
        this.peliculas=[
            new Pelicula("Spiderman 4",2022,'assets/images/3.jpg'),
            new Pelicula("Vengadores End Game",2019,'assets/images/4.jpg'),
            new Pelicula("Batman vs superman",2018,'assets/images/1.jpg'),
            new Pelicula("Liga de la justicia",2021,'assets/images/2.jpg')
          ];
    }

    holaMundo(){
        return 'hola mundo';
    }

    getPeliculas(){
        return this.peliculas;
    }
}