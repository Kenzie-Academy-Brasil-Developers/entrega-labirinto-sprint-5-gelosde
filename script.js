let direita_esquerda=0;
let sima_baixo =9;
const posi=[];
const personage=document.createElement('div'); 
personage.className = 'personagem';
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

let iniciar= document.createElement('button');
document.body.appendChild(iniciar);
iniciar.className= "novo";
iniciar.innerHTML="Novo Jogo";
iniciar.addEventListener("click", tress);

let regras = document.createElement('p');
document.body.appendChild(regras)
regras.id = 'regras'
regras.innerHTML = 'Use as setas para mover seu personagem e chegar ao fim do labirinto'
}


function removeclic(){
    document.body.removeChild(document.body.querySelector("button"));
  
}


const novasdivs = () =>{
    sima_baixo=9;
    direita_esquerda=0;
    let vals= map.toString();
    let cont3=0;
    vals=vals.split("");
    let caixa= document.createElement("section");
    caixa.id='section';
    document.body.appendChild(caixa)

    for(let cont =0; cont<vals.length;cont++){
          
        if(vals[cont]==="W"){
            vals[cont]=document.createElement('div');
            vals[cont].className = 'parede';
            caixa.appendChild(vals[cont]);
      
        }else if(vals[cont]===" "){
            vals[cont]=document.createElement('div');
            vals[cont].className = 'caminho';
            caixa.appendChild(vals[cont]);
      
        }else if(vals[cont]==="S"){
            vals[cont]=document.createElement('div');
            vals[cont].className = 'inicio';
            caixa.appendChild(vals[cont]);
            liga= vals[cont];
        }else if(vals[cont]==="F"){
            vals[cont]=document.createElement('div');
            vals[cont].className = 'final';
           caixa.appendChild(vals[cont]);
        }
     }
    for(let cont =0;cont<15;cont++){
        posi[cont]=[];
    for(let cont2 =0;cont2<22;cont2++){
        posi[cont].push(vals[cont3]);
        cont3++;

    }
    }
  
    posi[sima_baixo][direita_esquerda].appendChild(personage);
    let dosero= document.createElement('button');
    caixa.appendChild(dosero);
    dosero.id= "reset";
    dosero.innerHTML="Recomeço";
    dosero.addEventListener("click", reset);

   
     }

     let contavitoria=0;


    document.addEventListener('keydown', (evt) => {
        const keyName = evt.key;
        let guarda_direita_esquerda =direita_esquerda;
        let guarda_sima_baixo=sima_baixo;
        if(keyName==="ArrowDown"){
        sima_baixo+=1;
        }else if(keyName==="ArrowUp"){
            sima_baixo-=1;
        }else if(keyName==="ArrowLeft"&&posi[sima_baixo][direita_esquerda].className !=='inicio'){
            direita_esquerda-=1;
        }else if(keyName==="ArrowRight"){
            direita_esquerda+=1;
        }
       
        
        if(posi[sima_baixo][direita_esquerda].className ==='parede'){
            posi[guarda_sima_baixo][guarda_direita_esquerda].appendChild(personage);
            sima_baixo=guarda_sima_baixo;
            direita_esquerda=guarda_direita_esquerda;
        }
        else if(posi[sima_baixo][direita_esquerda].className !=='parede'){
            
            posi[sima_baixo][direita_esquerda].appendChild(personage);    

        }
         if(posi[sima_baixo][direita_esquerda].className ==='final'){
            if(contavitoria===0){          
            venceu.innerHTML='Parabens! voce venceu!';
            document.getElementById('reset').remove();
            let vitoria= document.createElement('button');
            evt.stopPropagation();
            document.body.appendChild(vitoria);
            vitoria.className= "ganhou";
            vitoria.innerHTML="Retorne ao menu";
            vitoria.addEventListener("click", function(){
                window.location.reload();
            });
        contavitoria++;}

        }
      });
 function tress(){
    removeclic();
    novasdivs();
}
const recomeço = ()=>{
    let dosero= document.createElement('button');
    document.body.appendChild(dosero);
    dosero.id= "reset";
    dosero.innerHTML="Recomeço";
    dosero.addEventListener("click", reset);
   
}
function reset(){
document.getElementById('section').remove();
novasdivs();

}
