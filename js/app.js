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

  const seg = segundos < 10 ? "0" + segundos : segundos;
  const min = minutos < 10 ? "0" + minutos : minutos;
  const hr = horas < 10 ? "0" + horas : horas;

  horaTotal.innerHTML = `${hr}:${min}:${seg}`;
}

function iniciar() {
  intervalo = setInterval(funcionamiento, 1000);
}

function pausa() {
  clearInterval(intervalo);
}
