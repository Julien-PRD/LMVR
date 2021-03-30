
const express =require('express')
const app= express()
const port =8080
const fetch = require("node-fetch");

let urlmeteo='https://api.openweathermap.org/data/2.5/weather?q=Le Mans&appid=40170a02e70a9dafdceed1c03133ef7b&units=metric&lang=fr';
let urlfilm='http://www.omdbapi.com/?t=top+gun&apikey=edd208d0';
let urlcovide='https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement=Sarthe';

//let urlevent="https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&refine.region=Pays+de+la+Loire&refine.city=Le+Mans";

var meteo;
var film;
var covid;
var event;



fetch(urlmeteo).then((response)=>
    response.json().then((data)=>{
        console.log(data);
        meteo=data;

    })
);
fetch(urlfilm).then((response)=>
    response.json().then((data)=>{
        console.log(data);
        film=data;

    })
);
fetch(urlcovide).then((response)=>
    response.json().then((data)=>{
        console.log(data);
        covid=data;

    })
);
/*
fetch(urlevent).then((response)=>
    response.json().then((data)=>{
        console.log(data);
        event=data;

    })
);*/


app.get('/getData',(req,res)=>{
  res.json({
      
    "meteo":[
        {
         "ville":meteo.name,
         "temperature":meteo.main.temp,
         "description":meteo.weather[0].description
        },
    ],
    "film":[
            {
                "film":film.Title,
                "Poster":film.Poster,
                "description":film.Plot
            },
        ],
    "covid":[
         {
             "hospitalises":covid,
             "reanimation":covid.reanimation,
             "gueris":covid.gueris
         },
    ]
    
    /*
      "ville":meteo.name,
      "temperature":meteo.main.temp,
      "description":meteo.weather[0].description,
      "film":film.Title,
      "Poster":film.Poster,
      "description":film.Plot*/
  })

  
   
})


/**api film
 */



app.listen(port,(req,res)=>{
    console.log('Serveur pret à l emploie sur http://localhost:8080/getData')
})












