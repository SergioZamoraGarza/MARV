import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Global} from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  providers:[ArticleService]
})
export class ArticuloComponent implements OnInit {

  public article:Article;
  public url:string;

  constructor(
    public _articleService:ArticleService,
    private _route:ActivatedRoute,
    private _router:Router
    ) {
      this.url=Global.url;
     }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id= params['id'];

      this._articleService.getArticle(id).subscribe(
        response=>{
          if(response.article){
            this.article=response.article;
          }
        },
        error=>{
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id){
    swal({
      title: "¿Estás seguro de eliminar el artículo?",
      text: "No podrás recuperar tu artículo",
      icon: "error",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response=>{
            if(response){
              swal("Tu Artículo ha sido eliminado con éxito.", {
                icon: "success",
              });
              this._router.navigate(['/blog']);
            }
          },
          error=>{
            console.log(error);
          }
        );

       
      } else {
        swal("Proceso cancelado");
      }
    });
   
  }

}
