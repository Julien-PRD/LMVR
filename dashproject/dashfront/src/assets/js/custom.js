it = 1;
function changerEvent(indice,evenement1,evenement2,evenement3){
    if(it==1){
        document.getElementById('titre').innerHTML = evenement2[0];
        document.getElementById('date').innerHTML = evenement2[1];
        document.getElementById('adresse').innerHTML = evenement2[2];
        document.getElementById('photo').src = evenement2[3];
        document.getElementById('description').innerHTML = evenement2[4];
        if(indice==1){
            it += 1;
        }else{
            it = 3;
        }
        
        document.getElementById('cmp').innerHTML = it+"/3";

    }else if(it==2){
        document.getElementById('titre').innerHTML = evenement3[0];
        document.getElementById('date').innerHTML = evenement3[1];
        document.getElementById('adresse').innerHTML = evenement3[2];
        document.getElementById('photo').src = evenement3[3];
        document.getElementById('description').innerHTML = evenement3[4];
        if(indice==1){
            it += 1;
        }else{
            it -= 1;
        }
        document.getElementById('cmp').innerHTML = it+"/3";
    }else{
        document.getElementById('titre').innerHTML = evenement1[0];
        document.getElementById('date').innerHTML = evenement1[1];
        document.getElementById('adresse').innerHTML = evenement1[2];
        document.getElementById('photo').src = evenement1[3];
        document.getElementById('description').innerHTML = evenement1[4];
        if(indice==1){
            it = 1;
        }else{
            it -= 1;
        }
        document.getElementById('cmp').innerHTML = it+"/3";
    }
}

