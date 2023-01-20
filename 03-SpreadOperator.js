'use strict';

// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
let copyPointList = [...pointsList];
console.log('resultado 3.1: ');
console.log(copyPointList)


// // 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let copyToy = {...toy};
console.log('resultado 3.2: ');
console.log(copyToy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const pointsList3 = [...pointsList1, ...pointsList2];
console.log('resultado 3.3: ');
console.log(pointsList3);

// // 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// // con spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const toy2 = {...toy1, ...toyUpdate};

console.log('resultado 3.4: ');
console.log(toy2);

// // 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// // pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const myColors = [...colors.slice(0,2), ...colors.slice(3,5)];
console.log('resultado 3.5: ')
console.log(myColors);