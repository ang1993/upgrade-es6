'use strict';

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18.

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let mayorDeEdad = ages.filter(number => number > 18);

console.log(mayorDeEdad)


// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let pares = ages2.filter(number2 => number2 % 2 == 0);

console.log(pares);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

let streamerslol = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(streamerslol)

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.

let streamersU = streamers.filter(streamer => streamer.name.includes('u'));
console.log(streamersU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.

let filtrados = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends')); 
for (const filtrado of filtrados) {
	if (filtrado.age > 35) {
		filtrado.gameMorePlayed = filtrado.gameMorePlayed.toUpperCase();
	}
}

console.log(filtrados);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

function filtrarStreamers(event){
	const valor = event.target.value;
	let filterStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(valor.toLowerCase()));
	console.log(filterStreamers); 
}

document.querySelector('input').addEventListener('keyup', filtrarStreamers);


// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.

const myButton = document.createElement("button");
myButton.innerText = 'Buscar streamers';
document.body.append(myButton);
myButton.addEventListener('click', filtrarStreamersB);

function filtrarStreamersB(event){
	let inputVal = document.querySelector('input').value;
	let filterStreamersB = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputVal.toLowerCase()));
	console.log(filterStreamersB);
}
