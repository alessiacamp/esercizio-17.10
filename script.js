const bottoneEstrai = document.getElementById("estrai");

function creaTabella() {
  for (let i = 1; i <= 76; i++) {
    const cellaTabella = document.createElement("div");
    cellaTabella.innerText = i;
    document.getElementById("contenitore").appendChild(cellaTabella);
  }
}
creaTabella();
function creaTabellina() {
  for (let i = 1; i <= 15; i++) {
    const cellaTabellina = document.createElement("div");
    cellaTabellina.innerText = i;
    document.getElementById("tabellina").appendChild(cellaTabellina);
  }
}
creaTabellina();
bottoneEstrai.addEventListener("click");
function estraiNumero() {
  let numeroCasuale = Math.floor(Math.random() * 76) + 1;
}
