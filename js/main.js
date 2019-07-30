"use strict";

// Fase 5
// Ahora ya tenemos un poco más controlado el invento y parece que podemos controlar diferentes resultados de funciones según los valores que le pasemos a sus parámetros…

// Alguien se ha dado cuenta de que estamos escribiendo las palabras que queremos y ha dicho: Ey, yo no tengo una o dos palabras, pero tengo una lista de palabras y números. ¿Me la podríais escribir?

// La lista es la siguiente:

// const myWordList =  [
//   {
//     text: 'Pencil',
//     total: 6
//   },
//   {
//     text: 'Thermo',
//     total: 2
//   },
//   {
//     text: 'TV',
//     total: 8
//   },
//   {
//     text: 'Phone',
//     total: 4
//   }
// ];
// Para ello crearemos una nueva función writeMyArray que aceptará como parámetro un array, lo recorrerá y escribirá cada palabra el número de veces indicado utilizando nuestra función writeThis.

// const myWordList = [
//   {
//     text: "Pencil",
//     total: 6
//   },
//   {
//     text: "Thermo",
//     total: 2
//   },
//   {
//     text: "TV",
//     total: 8
//   },
//   {
//     text: "Phone",
//     total: 4
//   }
// ];

// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }

// function writeThis(word) {
//   const myRandomNumber = getRandomNumber(10);
//   for (let i = 0; i < myRandomNumber; i++) {
//     console.log(word, myRandomNumber);
//   }
// }
// writeThis("Patata");
// writeThis("Aguacate");
// writeThis("Pizza");

// function writeMyArray(arr) {
//   for (const item of myWordList) {
//     console.log(item.text);
//   }
// }

// writeThis('myWordList');

// // function writeMyArray(arr){
// //   const myRandomNumber = getRandomNumber(10);
// //   for (const item of myWordList) {
// //     console.log(item.text, myRandomNumber)
// //   }
// // }
// // writeMyArray('myWordList',);



function writeThis(word, maxNumber) {
  for (let i = 0; i < maxNumber; i++) {
      console.log(word);
  }

}

const myWordList = [{
      text: 'Pencil',
      total: 6
  },
  {
      text: 'Thermo',
      total: 2
  },
  {
      text: 'TV',
      total: 8
  },
  {
      text: 'Phone',
      total: 4
  }
];

function writeMyArray(array) {
  for (const item of array) {
      writeThis(item.text, item.total);
  }
}


writeMyArray(myWordList);
