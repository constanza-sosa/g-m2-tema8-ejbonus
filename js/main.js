'use strict';
// La media
// a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
// b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.
// c) Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

const numbers = [];
numbers [0] = 10;
numbers [1] = 10;
numbers [2] = 10;
numbers [3] = 10;
numbers [4] = 10;

// let acc = 0;

// for (let i = 0 ; i < numbers.length; i = i++ / numbers.length) {
//   acc += numbers[i];
// }
// console.log('La media es ' + acc);

