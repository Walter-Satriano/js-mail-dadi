/* ESERCIZIO: Gioco dei dadi, chi fa di più vince. */

// Definizione variabili
var lancioGiocatore1, lancioGiocatore2, risultato

// Giocatore 1 lancia il dado generando un valore casuale da 1 a 6
lancioGiocatore1 = Math.floor(Math.random() * 5) + 1;
console.log(lancioGiocatore1, "Giocatore1");

// Giocatore 2 lancia il dado generando un valore casuale da 1 a 6
lancioGiocatore2 = Math.floor(Math.random() * 5) + 1;
console.log(lancioGiocatore2, "Giocatore2");


// Verifico i punteggi
if (lancioGiocatore1 > lancioGiocatore2) {
  risultato = "Vince Giocatore 1";
  console.log("Vince Giocatore 1");
} else if (lancioGiocatore1 == lancioGiocatore2) {
  risultato = "Pareggio";
  console.log("Pareggio");
} else {
  risultato = "Vince Giocatore 2";
  console.log("Vince Giocatore 2")
}

// Stampo in pagina i valori casuali dei dadi ed il vincitore
document.getElementById("giocatore1").innerHTML = "Giocatore1: " + lancioGiocatore1;
document.getElementById("giocatore2").innerHTML = "Giocatore2: " + lancioGiocatore2;

document.getElementById("gioco-dadi").innerHTML = risultato;
