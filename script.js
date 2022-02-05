let jogadas = 0;
function vira() {
    if (jogadas == 0){
        contar();
    }
    jogadas++;
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