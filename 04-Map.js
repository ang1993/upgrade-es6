'use strict';

// // 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// // utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let usersName = users.map(user => user.name);

console.log('________ resultado 4.1: ')
console.log(usersName)

// // 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// // de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// // empiece por 'A'.
const myUsers = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const myUsersName = users.map((user)=>{
    if (user.name[0] === "A") {
        user.name = "Anacleto"        
    }
   	 return user.name
})

console.log('________ resultado 4.2: ')
console.log(myUsersName);


// // 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// // de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// // cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let myCities = cities.map((cities) => {
	if (cities.isVisited) {
		cities.name = cities.name + ' - ¡visitado!'
	} else {
		cities.name = cities.name + ' - pendiente'
	}
	return cities.name
})
console.log('________ resultado 4.3: ')
console.log(myCities);

