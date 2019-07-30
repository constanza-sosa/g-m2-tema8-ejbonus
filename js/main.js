"use strict";

// Ahora hemos visto que a una función le podemos pasar datos en crudo a través de los parámetros. Además podríamos pasar estos datos si ya los tuviésemos almacenados en constantes e incluso funciones que nos devuelvan datos!!!

// Qué locura! Cómo es eso de la funciones? Vamos a rescatar a nuestra querida getRandomNumber() del ejercicio de evaluación intermedia, para quien no se acuerde era algo como:

// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }
// Esta función generaba un número aleatorio de 0 al número que le pasemos por parámetro.

// Qué le tendríamos que escribir en nuestra función writeThis para que nos escribiese las palabras que le pasamos un número random de veces de 0 a 10?

// Pista:

// writeThis('patata',?);
// writeThis('aguacate'?);
// writeThis('pizza',?);

// //opcion coco
// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }

// function writeThis(word) {
//   const myRandomNumber = getRandomNumber(10);
//   for (let i = 0; i < myRandomNumber; i++) {
//     console.log(word, myRandomNumber);
//   }
// }
// SI hago esta opcion, ya no voy a poder utilizar esta función más. 

// writeThis("Patata");
// writeThis("Aguacate");
// writeThis("Pizza");

// //opcion marta
// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }

// function writeThis(word, number) {
//   for (let i = 0; i < number; i++) {
//     console.log(word);
//   }
// }

// writeThis("patata", getRandomNumber(11));
// writeThis("aguacate", getRandomNumber(11));
// writeThis("Pizza", getRandomNumber(11));


//opcion 3: 

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function writeThis(word, maxNumber) {
  for (let i = 0; i < maxNnumber; i++) {
    console.log(word);
  }
}
//const randomNumber = getRandomNumber(11)
//si hacemos esta opción solo nos gernerara un numero para todos los casos

writeThis('patata', getRandomNumber(10));
writeThis('aguacate', getRandomNumber(30));
writeThis('Pizza', getRandomNumber(50));