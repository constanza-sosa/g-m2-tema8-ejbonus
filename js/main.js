'use strict';

// Ahora tenemos una función que nos escribe ‘patata’ 10 veces en la consola cada vez que la llamemos, pero eso, dentro de lo que cabe, es poco útil porque ahora que sé que puedo escribir una palabra 10 veces en la consola lo que me gustaría es poder escribir palabras diferentes.

// Entonces, vamos a modificar nuestra función ten() para que acepte un parámetro word, y vamos a llamar a la función 3 veces, pasándole cada vez una palabra diferente:

// ten('Patata`);
// ten('Aguacate`);
// ten('Pizza');

function ten(word){
  for(let i = 0; i < 10 ; i++){
    console.log(word)
    //para que loe escriba cada vez
    // console.log(i, word)
  }
}
ten('Patata');
ten('Aguacate');
ten('Pizza');

//Para escribirlo de otra forma
// function ten(a, b, c){
//   for(let i = 0; i < 10 ; i++){
//     console.log(a, b, c)
//     //para que loe escriba cada vez
//     // console.log(i, word)
//   }
// }
// ten('Patata', 'Aguacate', 'Pizza');
