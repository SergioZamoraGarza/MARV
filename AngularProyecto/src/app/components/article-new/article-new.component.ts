import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Global} from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers:[ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article:Article;
  public status:string;
  public page_title:string;

  constructor(
    private _articleService:ArticleService,
    private _route:ActivatedRoute,
    private _router:Router
    ) 
    { 
      this.article = new Article('','','',null,null);
      this.page_title="Crear Artículo";
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response=>{
        if(response.status=="success"){
          this.status="success";
          this.article=response.article;

        //Alerta
        swal(
          'Artículo creado!!!',
          'El artículo se ha creado con exito',
          'success'
        );

          this._router.navigate(['/blog']);
        }else{
          this.status="error";
        }
      },
      error=>{
        swal(
          'Edición fallida!!!',
          'El artículo no se ha editado',
          'error'
        );
        this.status='error';
      }
    )
  }
  
  imageUpload(data){
    let image_data=JSON.parse(data.response);
    this.article.image=image_data.image;
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
