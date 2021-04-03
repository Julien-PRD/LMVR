num_event= 1;

function changerEvent(sens, evenement1, evenement2, evenement3){
    //Si "etat" est a true alors le sens est vers l'avant sinon il est vers l'arrière
    if(sens == 1){ //Si le sens est égale à 1 (vers l'avant), alors on incrémente le numéro d'evenement
        if(num_event == 1){ 
            num_event = 2;
        }else if(num_event == 2){
            num_event ++;
        }else if(num_event == 3){
            num_event = 1;
        }
    }else if(sens == -1){    //Si le sens est égal à -1 (vers l'arrières), alors on décrémente le numéro d'evenement
        if(num_event == 1){
           num_event = 3;
        }else if(num_event == 2){
            num_event --;
        }else if(num_event == 3){
            num_event = 2;
        }
    }
    
    if(num_event == 1){
        document.getElementById('titre').innerHTML = evenement1[0];
        document.getElementById('date').innerHTML = evenement1[1];
        document.getElementById('adresse').innerHTML = evenement1[2];
        document.getElementById('photo').src = evenement1[3];
        document.getElementById('description').innerHTML = evenement1[4]; 

        document.getElementById('cmp').innerHTML = "1/3";
    
    }else if(num_event == 2){
        document.getElementById('titre').innerHTML = evenement2[0];
        document.getElementById('date').innerHTML = evenement2[1];
        document.getElementById('adresse').innerHTML = evenement2[2];
        document.getElementById('photo').src = evenement2[3];
        document.getElementById('description').innerHTML = evenement2[4];
            
        document.getElementById('cmp').innerHTML = "2/3";

    }else if(num_event == 3){
        document.getElementById('titre').innerHTML = evenement3[0];
        document.getElementById('date').innerHTML = evenement3[1];
        document.getElementById('adresse').innerHTML = evenement3[2];
        document.getElementById('photo').src = evenement3[3];
        document.getElementById('description').innerHTML = evenement3[4];
            
        document.getElementById('cmp').innerHTML =  "3/3";

    }
}

    

