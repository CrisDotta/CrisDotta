const time = document.getElementById("time");
const date = document.getElementById("date");
const zone = document.getElementById("zone");

const hs = new Date().getHours();
const min = new Date().getMinutes();
const sec = new Date().getSeconds();
const day = new Date().getDay();
const month = new Date().getMonth();
const numero = new Date().getDate();
const year = new Date().getFullYear();

const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

time.innerText = `${minTwoDigits(hs)}:${minTwoDigits(min)}:${minTwoDigits(
  sec
)}`;

date.innerText = `${days[day]}, ${numero} de ${months[month]} de ${year}`;

let interval = setInterval(() => {
  let hs = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  time.innerText = `${minTwoDigits(hs)}:${minTwoDigits(min)}:${minTwoDigits(
    sec
  )}`;
}, 1000);

function minTwoDigits(n) {
  return (n < 10 ? "0" : "") + n;
}
async function catchJSON() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Salta"
  );
 const timezone = await response.json();
 return timezone
}

console.log(catchJSON());
