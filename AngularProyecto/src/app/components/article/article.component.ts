import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public title:string;
  public peliculas:Array<any>;

  constructor() {
    this.title="Peliculas";
    this.peliculas=[
      {year:"2022",title:"Spiderman 4",image:'assets/images/3.jpg'},
      {year:"2019",title:"Vengadores End Game",image:'assets/images/4.jpg'},
      {year:"2018",title:"Batman vs superman",image:'assets/images/1.jpg'},
      {year:"2021",title:"Liga de la justicia",image:'assets/images/2.jpg'}
    ];
   }

  ngOnInit(): void {
  }

}
