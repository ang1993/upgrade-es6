'use strict';

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let totalScore = exams.reduce((accumulator, alumn) => accumulator + alumn.score, 0);
console.log('________ resultado 7.1: ')
console.log(totalScore)

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

let sumaAprobados = exams.reduce(function(sum, alumn){
    if (alumn.score >= 5) {
        return sum + alumn.score;
    } else {
        return sum
    };
}, 0);

    console.log('________ resultado 7.2: ')
    console.log(sumaAprobados)

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

let mediaTotal = exams.reduce((accumulator, alumn) => accumulator + alumn.score / exams.length, 0);

    console.log('________ resultado 7.3: ')
    console.log('La media de todos los exámenes es: ' + mediaTotal)

    

