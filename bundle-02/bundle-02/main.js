/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1 
function checkAge() {
    const myAge = 32;
    let message = ''; // message non può essere una const

    if (myAge < 18) {
        message = 'Sei troppo giovane! Hai '+ myAge + ' anni!'; // template literal al posto degli apici, con conseguenziale adattamento
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`); // errore di sintassi nella parola length
}
printColorsNumber();


// ESERCIZIO 3
function addNumbers() {
    const userNumber = Number(prompt('Inserisci un numero')); // mancanza di number per accettare in prompt solo numeri
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false; // valore boolean tra gli apici

    if (addresses.includes(userEmail)) {
        grantAccess = true; // valore boolean tra gli apici
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
    ];

    const userEmail = prompt("Inserisci il tuo indirizzo email");

    let grantAccess = false; // valore boolean tra gli apici

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {
            if (email === userEmail) {
                grantAccess = true; // valore boolean tra gli apici
            }
        }

        if (grantAccess) {
            console.log("Accesso consentito!");
        } else {
            console.log("Accesso negato!");
        }
    }
    checkAccessImproved();
}
// mancata chiusura