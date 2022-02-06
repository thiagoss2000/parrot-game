let jogadas = 0;

let qtdCartas;

let estoque = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
];
let cartas = [];

function comparador() { 
	return Math.random() - 0.5; 
}

/////////////////////
function iniciar() {
    qtdCartas = prompt("digite a quantidade de cartas");

    if (qtdCartas > 14) {qtdCartas = 14;}
    if (qtdCartas < 4) {qtdCartas = 4;}
    if (qtdCartas%2 !== 0) {qtdCartas--;}

    estoque.sort(comparador);
    for (let i = 0; i < 2; i++) {
        for (let i = 0; i < qtdCartas/2; i++) {
            cartas.push(estoque[i])
        }
    }
    cartas.sort(comparador);
    for (let i = 0; i < qtdCartas; i++) {
        const painel = document.querySelector(".jogo");
        
        painel.innerHTML += `
        <div class="carta${i}" onclick= "vira('${i}')" >
        <img class="backkface${i}" src="/arquivos img/front.png" alt="back">
        <img class="fronttface${i} fronttface ${cartas[i]}" src="/arquivos img/${cartas[i]}" alt="front">
        </div>`;
     }
}  

let primeira = null, idd1 = null;
function vira(idd) {
    if (jogadas == 0){
        contar();
    }
    jogadas++;
   
    //let conferirVirada = document.querySelector(".jogo");
    if  (idd !== idd1) {
      if (primeira !== null){

        if (primeira === cartas[idd]) {
          
          primeira = null;
          let retirarCarta1 = document.querySelector(".carta"+idd);
          retirarCarta1.removeAttribute("onclick");
          let retirarCarta2 = document.querySelector(".carta"+idd1);
          retirarCarta2.removeAttribute("onclick");
        //   remove onclick
        }else{
          primeira = null;

          setTimeout (desvira, 1000);
          function desvira() {
            let virarb = document.querySelector(".fronttface" + idd);
            virarb.classList.toggle("frontface");
            let virara = document.querySelector(".backkface" + idd);
            virara.classList.toggle("backface");
            let virard = document.querySelector(".fronttface" + idd1);
            virard.classList.toggle("frontface");
            let virarc = document.querySelector(".backkface" + idd1);
            virarc.classList.toggle("backface");
          }
        //   desvira ambas
        }

        let virarb = document.querySelector(".fronttface" + idd);
        virarb.classList.toggle("frontface");
        let virara = document.querySelector(".backkface" + idd);
        virara.classList.toggle("backface");
        
      }else{
        
        let virarb = document.querySelector(".fronttface" + idd);
        virarb.classList.toggle("frontface");
        let virara = document.querySelector(".backkface" + idd);
        virara.classList.toggle("backface");
        
        primeira = cartas[idd];
        idd1 = idd;
      }
    }
}

function contar() {
    
    let tempo = document.querySelector(".contador");
    tempo.innerHTML = 0;
    function decrementa() {
      if (tempo.innerHTML == 1000) {
        clearInterval(intervalo);
      } else {
        tempo.innerHTML++;
      }
    }
    intervalo = setInterval (decrementa, 1000);
  }