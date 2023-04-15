const horaTotal = document.getElementById("cronometro");

let horas = 0,
  minutos = 0,
  segundos = 0;
let intervalo;

function funcionamiento() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    horas++;
  }


  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (horas < 10) {
    horas = "0" + horas;
  }

  horaTotal.innerHTML = `${horas}:${minutos}:${segundos}`;
}

function iniciar() {
  intervalo = setInterval(funcionamiento, 1000);
}

function pausa() {
    clearInterval(intervalo);
}
