/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("\n ----------------------Esercizio 1----------------------\n");
const area = function (l1, l2) {
  let arearettangolo = l1 * l2;
  console.log("Questo è all' interno della function: " + arearettangolo);
  return arearettangolo;
};

console.log("Questo è all' esterno della function: " + area(5, 7));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("\n ----------------------Esercizio 2----------------------\n");
const crazySum = function (num1, num2) {
  if (num1 !== num2) {
    let somma = num1 + num2;
    return somma;
  } else {
    let sommapazza = (num1 + num2) * 3;
    return sommapazza;
  }
};

console.log(crazySum(2, 7));
console.log(crazySum(4, 4));
console.log(crazySum(6, 7));
console.log(crazySum(8, 8));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("\n ----------------------Esercizio 3----------------------\n");
const crazyDiff = function (num1) {
  if (num1 <= 19) {
    let differenza = 19 - num1;
    return differenza;
  } else {
    let differenza2 = (num1 - 19) * 3;
    return differenza2;
  }
};
console.log(crazyDiff(12));
console.log(crazyDiff(19));
console.log(crazyDiff(100));
console.log(crazyDiff(1));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("\n ----------------------Esercizio 4----------------------\n");

const boundary = (n) => {
  if ((n > 20 && n < 100) || n === 400) {
    console.log(true);
  } else {
    console.log(false);
  }
};
boundary(5);
boundary(50);
boundary(200);
boundary(400);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("\n ----------------------Esercizio 5----------------------\n");

const epify = function (stringa) {
  const lettere = stringa.split(" ");
  console.log(lettere);
  if (lettere[0] === "EPICODE") {
    console.log(stringa);
    return;
  } else {
    lettere.unshift("EPICODE");
    console.log(lettere.join(" "));
    return;
  }
};
epify("Scrivi una funzione di nome etc..");
epify("EPICODE se la stringa fornita comincia già etc...");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il
 parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("\n ----------------------Esercizio 6----------------------\n");
const check3and7 = function (num1) {
  // if (num1 <0) {
  //     console.log("ERRORE, avete inserito un numero negativo. Inserire un numero positivo")
  //     return;
  // }
  switch (true) {
    case num1 < 0:
      console.log(
        "ERRORE, avete inserito un numero negativo. Inserire un numero positivo"
      );
      return;
    case num1 % 3 === 0 && num1 % 7 === 0:
      console.log("avete inserito un multiplo di tre e di sette");
      return;

    case num1 % 3 === 0:
      console.log("avete inserito un multiplo di tre");
      return;
    case num1 % 7 === 0:
      console.log("avete inserito un multiplo di sette");
      return;
    default:
      console.log("il numero inserito non è un multiplo di 3 o 7");
  }
};
check3and7(30);
check3and7(49);
check3and7(-34);
check3and7("Ciao");
check3and7(21);
check3and7(49);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("\n ----------------------Esercizio 7----------------------\n");
const reverseString = function (stringa) {
  let arrDiCarattari = stringa.split("");
  //   console.log(arrDiCarattari);
  let arrInvertito = arrDiCarattari.reverse();
  //   console.log(arrInvertito);
  let arrUnito = arrInvertito.join("");

  console.log(arrUnito);
  return arrUnito;

  // return stringa.split("").reverse().join("");
};
// console.log(
//   reverseString(
//     "Scrivi una funzione di nome 'reverseString', il cui scopo è invertire una stringa fornita come parametro"
//   )
// );
reverseString(
  "Scrivi una funzione di nome 'reverseString', il cui scopo è invertire una stringa fornita come parametro"
);
console.log("-----------------------");
const prova = function (strin) {
  return strin.split("").reverse().join("");
};
console.log(
  prova(
    "Scrivi una funzione di nome 'reverseString', il cui scopo è invertire una stringa fornita come parametro"
  )
);

console.log(
  "-------------------------------------------------------------------"
);

const reverseString2 = function (stringa1) {
  let stringaInvertita = "";
  for (let i = stringa1.length - 1; i > -1; i--) {
    stringaInvertita += stringa1[i];

    // console.log(stringaInvertita);
  }
  // console.log(stringaInvertita);
  return stringaInvertita;
};

// reverseString2(
//   "Scrivi una funzione di nome 'reverseString', il cui scopo è invertire una stringa fornita come parametro"
// );
console.log(
  reverseString2(
    "Scrivi una funzione di nome 'reverseString', il cui scopo è invertire una stringa fornita come parametro"
  )
);

// /* ESERCIZIO 8
//  Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
//  La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
// */
console.log("\n ----------------------Esercizio 8----------------------\n");
const upperFirst = function (str) {
  const arrParole = str.split(" ");
  console.log(arrParole);
  let unite = [];

  for (let i = 0; i < arrParole.length; i++) {
    const parola = arrParole[i];

    const primaLet = parola.charAt(0);

    const fineParola = parola.slice(1);

    unite.push(primaLet.toUpperCase() + fineParola);
  }
  return unite;
};
console.log(upperFirst("La funzione deve rendere maiuscola"));

// /* ESERCIZIO 9
//  Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
// La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
//  della stringa originale.
// */
console.log("\n ----------------------Esercizio 9----------------------\n");

// const cutString = function (lettere){
//   const paroleSeparate = lettere.split(" ");
//   for(let i=0;i<paroleSeparate.length;i++){
//     paroleSeparate[i]

//   }

// };

// /* SCRIVI QUI LA TUA RISPOSTA */

// /* ESERCIZIO 10
//  Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
// */
console.log("\n ----------------------Esercizio 10----------------------\n");
const giveMeRandom = function (n) {
  const arrRandomNumber = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    arrRandomNumber.push(randomNumber);
  }
  return arrRandomNumber;
};
console.log(giveMeRandom(34));
