/*ESERCIZIO: Chiedi all’utente la sua email, controlla che sia nella lista
di chi può accedere e stampa un messaggio appropriato.*/

// Definizioni variabili
var userMail, mailingList, messaggio


// Chiedo all'utente la sua mail
userMail = prompt("Inserisci la tua mail");

// Creo una lista di mail (array)
mailingList = ["carlo@gmail.com", "gigi@gmail.com", "franca@libero.it"];

// Messaggio di default in caso di mail non presente
messaggio = "SPIACENTI! La tua mail non è registrata e non puoi accedere al servizio!";

// Ciclo per controllare la presenza della mail dell'utente
for (var i = 0; i < mailingList.length; i++) {
  console.log(mailingList[i]);

  // se l'elemento mailinglist è uguale a userMail allora la mail utente è presente
  if (mailingList[i] == userMail) {
    messaggio = "COMPLIMENTI! La tua mail è registrata e puoi accedere al servizio!";
    console.log("puoi accedere");
  }
}

// Stampo in pagina il messaggio relativo
document.getElementById("mail-list").innerHTML = messaggio;
















// var mailTrovata = false;
//
// // Controllo se la mail dell'utente è presente nella lista
// for (var i = 0; i < mailingList.length; i++) {
//   console.log(mailingList[i]);
//
//   //se l'elemento mailinglist è uguale alla mail dell'utente
//   if (mailingList[i] == userMail) {
//     mailTrovata = true;
//     console.log("puoi accedere");
//   }
// }
//
// if (mailTrovata == true) {
//   document.getElementById("mail-list").innerHTML = "COMPLIMENTI! La tua mail è registrata e puoi accedere al servizio!"
// } else {
//   document.getElementById("mail-list").innerHTML = "SPIACENTI! La tua mail non è registrata e non puoi accedere al servizio!"
// }


// Stampo messaggio di conferma
// document.getElementById("mail-list").innerHTML = "COMPLIMENTI! La tua mail è registrata e puoi accedere al servizio!"
