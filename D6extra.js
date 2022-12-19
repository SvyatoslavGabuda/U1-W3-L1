// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali 
 (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Es 1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
const giveMeRandom = function (n) {
  const arrRandomNumber = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    arrRandomNumber.push(randomNumber);
  }
  return arrRandomNumber;
};

const checkArray = function (arraynumerico) {
  let somma = 0;
  for (let i = 0; i < arraynumerico.length; i++) {
    if (arraynumerico[i] > 5) {
      console.log("l'array in posizione " + i + " vale: " + arraynumerico[i]);
      somma += arraynumerico[i];
    }
  }
  return somma;
};
console.log(checkArray(giveMeRandom(10)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà:
  "price", 
  "name", 
  "id" e 
  "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio 
 (tenendo conto delle quantità di ogni oggetto).
*/
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Es 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
const shoppingCart = [
  {
    price: 110,
    name: "nome",
    id: "ASD765",
    quantity: 1,
  },
  {
    price: 20,
    name: "nome1",
    id: "ASD987",
    quantity: 5,
  },
  {
    price: 10,
    name: "nome2",
    id: "ASD432",
    quantity: 16,
  },
];

const shoppingCartTotal = function (listaShopping) {
  let totaleDovuto = 0;
  for (let i = 0; i < listaShopping.length; i++) {
    totaleDovuto += listaShopping[i].price * listaShopping[i].quantity;
  }
  return totaleDovuto;
};
console.log(
  "Dovete pagare un totale di: ",
  shoppingCartTotal(shoppingCart),
  "$"
);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart".
  Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, 
 lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Es 3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
const addToShoppingCart = function (prezzo, numero, ida, quantityIN) {
  const nuovoObj = {
    price: prezzo,
    name: numero,
    id: ida,
    quantity: quantityIN,
  };
  shoppingCart.push(nuovoObj);
  return shoppingCart.length;
};
console.log(addToShoppingCart(120, "albero", "ASD6778", 2));
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Es 4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
const maxShoppingCart = (arrShopping) => {
  let objExpensive = [];

  for (let i = 0; i < arrShopping.length; i++) {
    objExpensive = arrShopping[0];
    if (arrShopping[i].price > objExpensive.price)
      objExpensive = arrShopping[i];
  }
  return objExpensive;
};
console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Es 5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
const latestShoppingCart = (arrShopping) => arrShopping[arrShopping.length - 1];
console.log(latestShoppingCart(shoppingCart));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Es 6>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
const loopUntil = function (n) {
  let a = 0;
  if (n > 0 && n < 9) {
    while (a === 0) {
      let randomNumber = Math.floor(Math.random() * 10);
      console.log("primo", randomNumber);
      if (randomNumber > n) {
        let randomNumber2 = Math.floor(Math.random() * 10);
        console.log("secondo", randomNumber2);
        if (randomNumber2 > n) {
          let randomNumber3 = Math.floor(Math.random() * 10);
          console.log("terzo", randomNumber3);
          return;
        }
      }
    }
  } else {
    console.log("inserire numero da 0 a 9");
  }
};
loopUntil(4);

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. 
La funzione salta automaticamente i valori non numerici nell'array.
*/
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Es 7>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
const arrNumeriEStringhe = [
  1,
  2,
  "ASF",
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "asd",
  2,
  5,
  "dfuSHSD",
  "DFIH",
  0,
  1,
  2,
  3,
  4,
];
const average = (arrDiNumeri) => {
  let somma = 0;
  let contatore = 0;
  for (let i = 0; i < arrDiNumeri.length; i++) {
    if (typeof arrDiNumeri[i] === "number") {
      somma += arrDiNumeri[i];
      contatore++;
    }
  }
  const mediaAritmetica = somma / contatore;
  return mediaAritmetica;
};
console.log(average(arrNumeriEStringhe));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
console.log(
  "\n<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Es 8>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
);
const arrConTanteStringhe = [
  "rea",
  "una",
  "unzione",
  "chiamata",
  "longest",
  "che",
  "trova",
  "la ",
  "tringa",
  "lunga",
  "all'interno",
  "array di stringhe fornito",
];
const longest = function (arrDiStringhe) {
  let arrPiuLungo = [];
  for (let i = 0; i < arrDiStringhe.length; i++) {
    arrPiuLungo = arrDiStringhe[0];
    if (arrDiStringhe[i].length > arrPiuLungo.length)
      [(arrPiuLungo = arrDiStringhe[i])];
  }
  return arrPiuLungo;
};

console.log(longest(arrConTanteStringhe));
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. 
 La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e 
 i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
