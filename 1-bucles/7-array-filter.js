// ej 7
// crea un array con la gente que su nombre
// empieza por J y sean menores de 40 años
// utilizando el método filter de los arrays
// y muéstralo por consola.


let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]

// let people= gente.filter(function(person){

//     return person.nombre[0]==='P' && person.edad < 33;
// })


// console.log(people)





let genteFiltrada = gente.filter(function (persona) {
    return persona.nombre[0] === 'J' && persona.edad < 40
});
console.log(genteFiltrada)
// let genteFiltrada=gente.filter(function(persona){
//     return persona.nombre[0]==='L' && persona.edad < 25
// });

// console.log(genteFiltrada)