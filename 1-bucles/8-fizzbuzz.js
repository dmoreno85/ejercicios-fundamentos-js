// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

for (let i = 1; i <= 100; i++) {
    if ((i % 5 == 0 )&&(i % 3 == 0)) console.log("GEEKSHUBS") //comparten multiplo
    else if (i % 3 == 0) console.log('GEEKS')

    else if (i % 5 == 0) console.log('HUBS')


    else console.log(i)
}; 

// for (let i = 1; i <= 100; i++) {

//     if else ((i % 5 == 0 )||(i % 3 == 0)) console.log("GEEKSHUBS") //Imprime en cada multiplo de 3 o de 5
//     if (i % 3 == 0) console.log('GEEKS')

//     else if (i % 5 == 0) console.log('HUBS')



//     else console.log(i)
// }; 