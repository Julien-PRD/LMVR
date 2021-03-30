import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-revunue',
  templateUrl: './revunue.component.html',
  styleUrls: ['./revunue.component.css']
})
export class RevunueComponent implements OnInit {
  covid = {
    deces: '',
    gueris: '',
    reanimation: ''
  };
  totalAngularPackages: any;
  constructor(private http: HttpClient) {}

 
  

  ngOnInit() {
    this.http.get<any>('https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement=Sarthe').subscribe(data => {
    //this.http.get<any>('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&refine.tags=jeune+public&refine.department=Sarthe&refine.date_end=2018').subscribe(data => {
      this.totalAngularPackages = data.total;
      console.log(data);
      this.covid.deces = data.LiveDataByDepartement[0].deces;
      this.covid.gueris = data.LiveDataByDepartement[0].gueris;
      this.covid.reanimation = data.LiveDataByDepartement[0].reanimation;
  })
  }




}