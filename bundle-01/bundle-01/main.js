/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
/*
1. è un contatore
2. non sono presenti errori di sintassi
3. è presente l'errore logico in quanto i > 5 darà sempre una condizione falsa avendo dichiarato i = 0
*/  
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// ESERCIZIO 2
/* funzione per controllare se un numero è pari oppure no, se vera, aggiunge +5 al numero.
l'errore è nella condizione perché manca il doppio ==
*/ 
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}


// ESERCIZIO 3
/* è un contatore uguale al primo esercizio, in questo caso c'è un errore di di sintassi (virgole al posto dei punto e virgola)*/ 
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {  
        //errore chiusura con ; dentro la condizione || -1 non necessario
        if ((numbers[i] % 2) === 0) {   
            // Errore singolo = || mancanza di indice[i] || chiusura ; subito dopo la condizione || mancanza di parentesi tra (numbers[i] % 2)
            evenNumbers.push(numbers[i]);
            // errore di push dell'indice
        }
        // non permette di restituire i valori corretti se il return  si trova fuori dalla condizione esatta
    }
    return evenNumbers; 
}
displayEvenNumbers(numbers); // dovrebbe restituire [2,4,6,8]