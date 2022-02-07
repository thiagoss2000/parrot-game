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
        <div class="carta${i}" onclick= "vira('${i}')"  data-identifier="card">
        <img class="backkface${i}" data-identifier="back-face" src="/arquivos img/front.png" alt="back">
        <img class="fronttface${i} fronttface ${cartas[i]}" data-identifier="front-face" src="/arquivos img/${cartas[i]}" alt="front">
        </div>`;
     }
}  

let primeira = null, idd1 = null, acertos = 0, trava = false, tempo = 0;
function vira(idd) {
    if (jogadas == 0){
        contar();
    }
    jogadas++;   
    if  (idd !== idd1 && trava == false) {
      if (primeira !== null){
        if (primeira === cartas[idd]) {    //   desvira ambas
          primeira = null;
          let retirarCarta1 = document.querySelector(".carta"+idd);
          retirarCarta1.removeAttribute("onclick");
          let retirarCarta2 = document.querySelector(".carta"+idd1);
          retirarCarta2.removeAttribute("onclick");    
          acertos++;    
        }else{
          primeira = null;
          setTimeout (desvira, 1000);
          trava = true;
          function desvira() {    //   desvira ambas
            let virarb = document.querySelector(".fronttface" + idd);
            virarb.classList.toggle("frontface");
            let virara = document.querySelector(".backkface" + idd);
            virara.classList.toggle("backface");
            let virard = document.querySelector(".fronttface" + idd1);
            virard.classList.toggle("frontface");
            let virarc = document.querySelector(".backkface" + idd1);
            virarc.classList.toggle("backface");
            trava = false;
          }        
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
    if (acertos*2 == qtdCartas) {
      let resposta = prompt(`você ganhou com: ${jogadas} jogadas. Seu tempo foi de: ${tempo.innerHTML} segundos \n deseja jogar novamente? (sim)`);
      clearInterval(intervalo);
      if (resposta == "sim") {
        primeira = null, idd1 = null, acertos = 0, trava = false, tempo.innerHTML = 0, jogadas = 0, cartas = [];
        const painel = document.querySelector(".jogo");
        painel.innerHTML = ` `;
        iniciar();
      }else{
        const agradecimento = document.querySelector("h1");
        agradecimento.innerHTML = "Obrigado por Jogar";
        const painel = document.querySelector(".jogo");
        painel.innerHTML = ` `;
      }
    }
}
function contar() {
    
    tempo = document.querySelector(".contador");
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