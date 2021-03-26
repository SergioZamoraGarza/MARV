import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Global} from '../../services/global';

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

}
