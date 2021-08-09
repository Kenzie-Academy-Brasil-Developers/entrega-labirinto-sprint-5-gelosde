const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

window.onload = function (){
novasdivs()
}

function novasdivs(){
    let vals= map.toString();
    let posi=[];
    let cont3=0;
    vals=vals.split("");

    let liga;
    
       for(let cont =0; cont<vals.length;cont++){
        if(vals[cont]==="W"){
            vals[cont]=document.createElement('div');
            vals[cont].className = 'parede';
            document.body.appendChild(vals[cont]);
      
        }else if(vals[cont]===" "){
            vals[cont]=document.createElement('div');
            vals[cont].className = 'caminho';
            document.body.appendChild(vals[cont]);
      
        }else if(vals[cont]==="S"){
            vals[cont]=document.createElement('div');
            vals[cont].className = 'inicio';
            document.body.appendChild(vals[cont]);
            liga= vals[cont];
        }else if(vals[cont]==="F"){
            vals[cont]=document.createElement('div');
            vals[cont].className = 'final';
            document.body.appendChild(vals[cont]);
        }
     }
    for(let cont =0;cont<15;cont++){
        posi[cont]=[];
    for(let cont2 =0;cont2<21;cont2++){
        posi[cont].push(vals[cont3]);
        cont3++;
        
    }
    }
    let personage=document.createElement('div'); 
    personage.className = 'personagem';
    liga.appendChild(personage)
    console.log(posi);
    
    }