'use strict';

// Vamos a crear un repo por persona, y vamos a hacer una función que escriba patata 10 veces en la consola la función se llamará ten()

function ten(){
  for(let i = 0; i < 10 ; i++){
    console.log('patata')
  }
}
ten();

function eleven(){
  for(let i = 0; i < 10 ; i++){
    console.log(i,'patata')
  }
}
eleven();

function twelve(){
  for(let i = 0; i < 10 ; i++){
    console.log(`${i},'patata'`)
  }
}
twelve();