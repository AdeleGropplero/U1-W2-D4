/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) 
 e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 * l2;
};
area();
console.log("Es.1 -", area(7, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri 
 è il medesimo deve invece tornare la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  } else {
    return int1 + int2;
  }
};
console.log("Es.2 -", "caso 1:", crazySum(5, 6), "| caso 2:", crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra 
 un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num1, num2 = 19) {
  if (num1 > 19) {
    return (num1 - num2) * 3;
  } else {
    return num1 - num2;
  }
};
console.log("Es.3 -", "caso 1:", crazyDiff(5), "| caso 2:", crazyDiff(23));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log("Es.4 -", "caso 1:", boundary(25), "| caso 2:", boundary(123));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve ritornare la stringa originale 
 senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (param) {
  if (param.startsWith("EPICODE")) {
    return param;
  } else {
    return "EPICODE" + param;
  }
};
console.log(
  "Es.5 -",
  "caso 1:",
  epify(" epic education"),
  "| caso 2:",
  epify("EPICODE")
);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num) {
  if (num % 3 === 0) {
    return num + " è un multiplo di 3";
  } else if (num % 7 === 0) {
    return num + " è un multiplo di 7";
  } else {
    return num + " non è un multiplo di 3 o 7";
  }
};
console.log(
  "Es.6 -",
  "caso 1:",
  check3and7(18),
  "| caso 2:",
  check3and7(70),
  "| caso 3:",
  check3and7(94)
);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita 
 come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  const strArray = str.split("");
  const strArrayRev = strArray.reverse();
  const reverseString = strArrayRev.join("");
  return reverseString;
};
console.log("Es. 7 -", "EPICODE al contrario è:", reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
