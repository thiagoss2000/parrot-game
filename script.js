let jogadas = 0;

let qtdCartas = 10;

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
    //qtdCartas = prompt("digite a quantidade de cartas");

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
        <div  onclick= "vira('p${i}')" >
        <img class="backkfacep${i}" src="/arquivos img/front.png" alt="back">
        <img class="fronttfacep${i} fronttface" src="/arquivos img/${cartas[i]}" alt="front">
        </div>`;
     }
}  

function vira(idd) {
    if (jogadas == 0){
        contar();
    }
    jogadas++;

    let conferirVirada = document.querySelector(".jogo");

    if (conferirVirada.classList.contains("frontface")){

      let virarb = document.querySelector(".fronttface" + idd);
      virarb.classList.toggle("frontface");
      let virara = document.querySelector(".backkface" + idd);
      virara.classList.toggle("backface");
      
      // if (primeira === segunda) {
      //   remove onclick de ambas
      // }else{
      //   desvira ambas
      // }

    }else{

    let virarb = document.querySelector(".fronttface" + idd);
    virarb.classList.toggle("frontface");
    let virara = document.querySelector(".backkface" + idd);
    virara.classList.toggle("backface");
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
    intervalo = setInterval(decrementa, 1000);
  }