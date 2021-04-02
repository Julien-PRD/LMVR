it = 1;
function myTest(events1,events2,events3,events4,events5,events6,events7,events8,events9,events10,events11,events12,events13,events14,events15){
    //alert('{{events.evenement2[0]}}');
    if(it==1){
        document.getElementById('titre').innerHTML = events6;
        document.getElementById('date').innerHTML = events7;
        document.getElementById('adresse').innerHTML = events8;
        document.getElementById('photo').src = events9;
        document.getElementById('description').innerHTML = events10;
        it += 1;
    }else if(it==2){
        document.getElementById('titre').innerHTML = events11;
        document.getElementById('date').innerHTML = events12;
        document.getElementById('adresse').innerHTML = events13;
        document.getElementById('photo').src = events14;
        document.getElementById('description').innerHTML = events15;
        it += 1;
    }else{
        document.getElementById('titre').innerHTML = events1;
        document.getElementById('date').innerHTML = events2;
        document.getElementById('adresse').innerHTML = events3;
        document.getElementById('photo').src = events4;
        document.getElementById('description').innerHTML = events5;
        it = 1;
    }
}