import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

declare const deroulementFilm: any;


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film = {
    affiche:Array(),
    titre:Array(),
    dateDeSortie:Array(),
    description:Array(),
    nbfilm: ''

  };

  film2=[{
    affiche:"",
    titre:"",
    dateDeSortie:"",
    description:""
  }
  ]
  
    totalAngularPackages: any;
    constructor(private http: HttpClient) {}
    
    ngOnInit() {
      this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=5bf1753ef6fc941997c9f4c033fcaf20&language=fr-FR&page=1').subscribe(data => {
        this.totalAngularPackages = data.total;
        console.log(data);

      this.film2 = [{
        affiche: data.results[0].poster_path,
        titre: data.results[0].title,
        dateDeSortie: data.results[0].release_date,
        description: data.results[0].overview
      }, {
        affiche: data.results[1].poster_path,
        titre: data.results[1].title,
        dateDeSortie: data.results[1].release_date,
        description: data.results[1].overview
      }, {
        affiche: data.results[2].poster_path,
        titre: data.results[2].title,
        dateDeSortie: data.results[2].release_date,
        description: data.results[2].overview
      }, {
        affiche: data.results[3].poster_path,
        titre: data.results[3].title,
        dateDeSortie: data.results[3].release_date,
        description: data.results[3].overview
      }, {
        affiche: data.results[4].poster_path,
        titre: data.results[4].title,
        dateDeSortie: data.results[4].release_date,
        description: data.results[4].overview
      }, {
        affiche: data.results[5].poster_path,
        titre: data.results[5].title,
        dateDeSortie: data.results[5].release_date,
        description: data.results[5].overview
      }, {
        affiche: data.results[6].poster_path,
        titre: data.results[6].title,
        dateDeSortie: data.results[6].release_date,
        description: data.results[6].overview
      }, {
        affiche: data.results[7].poster_path,
        titre: data.results[7].title,
        dateDeSortie: data.results[7].release_date,
        description: data.results[7].overview
      }, {
        affiche: data.results[8].poster_path,
        titre: data.results[8].title,
        dateDeSortie: data.results[8].release_date,
        description: data.results[8].overview
      }, {
        affiche: data.results[9].poster_path,
        titre: data.results[9].title,
        dateDeSortie: data.results[9].release_date,
        description: data.results[9].overview
      }, {
        affiche: data.results[10].poster_path,
        titre: data.results[10].title,
        dateDeSortie: data.results[10].release_date,
        description: data.results[10].overview
      }, {
        affiche: data.results[11].poster_path,
        titre: data.results[11].title,
        dateDeSortie: data.results[11].release_date,
        description: data.results[11].overview
      }, {
        affiche: data.results[12].poster_path,
        titre: data.results[12].title,
        dateDeSortie: data.results[12].release_date,
        description: data.results[12].overview
      }, {
        affiche: data.results[13].poster_path,
        titre: data.results[13].title,
        dateDeSortie: data.results[13].release_date,
        description: data.results[13].overview
      }, {
        affiche: data.results[14].poster_path,
        titre: data.results[14].title,
        dateDeSortie: data.results[14].release_date,
        description: data.results[14].overview
      }, {
        affiche: data.results[15].poster_path,
        titre: data.results[15].title,
        dateDeSortie: data.results[15].release_date,
        description: data.results[15].overview
      }, {
        affiche: data.results[16].poster_path,
        titre: data.results[16].title,
        dateDeSortie: data.results[16].release_date,
        description: data.results[16].overview
      }, {
        affiche: data.results[17].poster_path,
        titre: data.results[17].title,
        dateDeSortie: data.results[17].release_date,
        description: data.results[17].overview
      }, {
        affiche: data.results[18].poster_path,
        titre: data.results[18].title,
        dateDeSortie: data.results[18].release_date,
        description: data.results[18].overview
      }, {
        affiche: data.results[19].poster_path,
        titre: data.results[19].title,
        dateDeSortie: data.results[19].release_date,
        description: data.results[19].overview
      }
      ]

        /*this.film.nbfilm = data.results.length
        for (let pas = 0; pas < data.results.length; pas++) {
          this.film.affiche.push(data.results[pas].poster_path);
          this.film.titre.push(data.results[pas].title);
          this.film.dateDeSortie.push(data.results[pas].release_date);
          this.film.description.push(data.results[pas].overview);        
        }*/
      })
    }
}
 