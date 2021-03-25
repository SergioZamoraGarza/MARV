export class Pelicula{
   /*  public title: string;
    public year:number;
    public image:string;

    constructor(title,year,image){
        this.title=title;
        this.year=year;
        this.image=image;
    } */
    //Simplificado se asigna en el constructor.
    constructor(
        public title: string,
        public year:number,
        public image:string
    ){}
}