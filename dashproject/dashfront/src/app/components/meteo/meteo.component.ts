
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})


export class MeteoComponent implements OnInit {
  meteo = {
    ville: '',
    description: '',
    temperature: '',
    icon:''
  };
  totalAngularPackages: any;
  constructor(private http: HttpClient) {}

 
  

  ngOnInit() {
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=Le Mans&appid=40170a02e70a9dafdceed1c03133ef7b&units=metric&lang=fr').subscribe(data => {
      this.totalAngularPackages = data.total;
      console.log(data);
      this.meteo.ville = data.name;
      this.meteo.description = data.weather[0].description;
      this.meteo.temperature = data.main.temp;
      this.meteo.icon = data.weather[0].icon;


  })
  }




}


