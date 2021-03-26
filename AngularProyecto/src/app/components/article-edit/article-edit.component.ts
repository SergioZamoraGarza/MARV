import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Global} from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers:[ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article:Article;
  public status:string;
  public is_edit:boolean;
  public page_title:string;
  public url:string;

  constructor(
    private _articleService:ArticleService,
    private _route:ActivatedRoute,
    private _router:Router
    ) 
    { 
      this.article = new Article('','','',null,null);
      this.is_edit=true;
      this.page_title="Editar Artículo";
      this.url=Global.url;
    }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit(){
    this._articleService.update(this.article._id,this.article).subscribe(
      response=>{
        if(response.status=="success"){
          this.status="success";
          this.article=response.article;
           //Alerta
        swal(
          'Artículo editado!!!',
          'El artículo se ha editado con exito',
          'success'
        );

          this._router.navigate(['/blog/articulo',this.article._id]);
        }else{
          this.status="error";
        }
      },
      error=>{
        console.log(error);
        this.status='error';
      }
    )
  }
  
  imageUpload(data){
    let image_data=JSON.parse(data.response);
    this.article.image=image_data.image;
  }

  getArticle(){
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

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url:Global.url+'upload-image',
      method:"POST",
      params: {
        'page': '1'
      },
      responseType: 'blob',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen del artículo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};
}
