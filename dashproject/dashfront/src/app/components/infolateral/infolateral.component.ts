import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';


@Component({
  selector: 'app-infolateral',
  templateUrl: './infolateral.component.html',
  styleUrls: ['./infolateral.component.css']
})
export class InfoLateralComponent implements OnInit {

  film = {
    affiche: '',
    affiche1: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    affiche2: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    description: '',
    description1: '',
    description2: '',

    acteur: '',
    acteur1: '',
    acteur2: ''

  };

  
    totalAngularPackages: any;
    constructor(private http: HttpClient) {}
  
   
    
  
    ngOnInit() {
      this.http.get<any>('http://www.omdbapi.com/?t=avengers+endgame&apikey=edd208d0').subscribe(data => {
        this.totalAngularPackages = data.total;
        console.log(data);
        this.film.affiche = data.Poster;
        this.film.description=data.Plot
        this.film.acteur=data.Actors;
      })
    }
  
  
  


}
 