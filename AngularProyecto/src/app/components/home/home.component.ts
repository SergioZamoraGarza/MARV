import { Component, OnInit,Input } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]
})
export class HomeComponent implements OnInit {

  public title:string;
  public url:string;

  @Input() articles:Article[];

  constructor(private _articleService:ArticleService) { 
    this.title="Últimos Artículos";
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
       response=>{
         if(response.articles){
           this.articles=response.articles;
         }
         else{
 
         }
       },
       error=>{
         console.log(error);
       }
    );
   }

}
