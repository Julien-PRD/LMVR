import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film = {
    affiche:'',
    affiche1:'',
    affiche2:'',
    affiche3:'',
    affiche4:'',
    affiche5:'',
    affiche6:'',
    affiche7:'',
    affiche8:'',
    affiche9:'',
    titre:'',
    titre1:'',
    titre2:'',
    titre3:'',
    titre4:'',
    titre5:'',
    titre6:'',
    titre7:'',
    titre8:'',
    titre9:'',
    dateDeSortie:'',
    dateDeSortie1:'',
    dateDeSortie2:'',
    dateDeSortie3:'',
    dateDeSortie4:'',
    dateDeSortie5:'',
    dateDeSortie6:'',
    dateDeSortie7:'',
    dateDeSortie8:'',
    dateDeSortie9:'',
    description:'',
    description1:'',
    description2:'',
    description3:'',
    description4:'',
    description5:'',
    description6:'',
    description7:'',
    description8:'',
    description9:'',

    nbfilm: ''

  };

  
    totalAngularPackages: any;
    constructor(private http: HttpClient) {}
  
   
    
  
    ngOnInit() {
      this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=5bf1753ef6fc941997c9f4c033fcaf20&language=fr-FR&page=1').subscribe(data => {
        this.totalAngularPackages = data.total;
        console.log(data);





        
        var tab=new Array();
        
        this.film.nbfilm = data.results.length;
        this.film.affiche=data.results[0].poster_path;
        this.film.affiche1=data.results[1].poster_path;
        this.film.affiche2=data.results[2].poster_path;
        this.film.affiche3=data.results[3].poster_path;
        this.film.affiche4=data.results[4].poster_path;
        this.film.affiche5=data.results[5].poster_path;
        this.film.affiche6=data.results[6].poster_path;
        this.film.affiche7=data.results[7].poster_path;
        this.film.affiche8=data.results[8].poster_path;
        this.film.affiche9=data.results[9].poster_path;


        this.film.titre=data.results[0].title;
        this.film.titre1=data.results[1].title;
        this.film.titre2=data.results[2].title;
        this.film.titre3=data.results[3].title;
        this.film.titre4=data.results[4].title;
        this.film.titre5=data.results[5].title;
        this.film.titre6=data.results[6].title;
        this.film.titre7=data.results[7].title;
        this.film.titre8=data.results[8].title;
        this.film.titre9=data.results[9].title;

        this.film.dateDeSortie=data.results[0].release_date;
        this.film.dateDeSortie1=data.results[1].release_date;
        this.film.dateDeSortie2=data.results[2].release_date;
        this.film.dateDeSortie3=data.results[3].release_date;
        this.film.dateDeSortie4=data.results[4].release_date;
        this.film.dateDeSortie5=data.results[5].release_date;
        this.film.dateDeSortie6=data.results[6].release_date;
        this.film.dateDeSortie7=data.results[7].release_date;
        this.film.dateDeSortie8=data.results[8].release_date;
        this.film.dateDeSortie9=data.results[9].release_date;

        this.film.description=data.results[0].overview;
        this.film.description1=data.results[1].overview;
        this.film.description2=data.results[2].overview;
        this.film.description3=data.results[3].overview;
        this.film.description4=data.results[4].overview;
        this.film.description5=data.results[5].overview;
        this.film.description6=data.results[6].overview;
        this.film.description7=data.results[7].overview;
        this.film.description8=data.results[8].overview;
        this.film.description9=data.results[9].overview;



        
        /*for (let i in data.results.length) {
          this.film.affiche[i]=
        }*/
       })
     
        }
  
  
  


}
 