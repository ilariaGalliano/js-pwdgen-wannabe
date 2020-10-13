/**
* (insicurissimo) password generator
**/

// chiedi all'utente il nome
var userName = prompt('Qual è il tuo nome?');

// chiedi all'utente il cognome
var lastName = prompt('Qual è il tuo cognome?')

// chiedi all'utente il colore preferito
var fav = prompt('Qual è il tuo colore preferito?')

// Random password generator
document.getElementById('password-generator').innerHTML = userName + lastName + fav + "19";
