// Concepto puro — dos sintaxis equivalentes
const numeros: number[] = [1, 2, 3, 4, 5];
const textos: Array<string> = ["a", "b", "c"];   // forma genérica

// TypeScript infiere el tipo del array si lo inicializas
const inferido = [10, 20, 30]; // number[] inferido

console.log(`Arreglo Numeros: $${numeros}`)
console.log(`Arreglos de Texto: $${textos}`)
console.log(`Arreglos Inferidos: $${inferido}`)
// Métodos tipados: el compilador conoce el tipo del elemento
const dobles: number[] = numeros.map((n) => n * 2);       // [2, 4, 6, 8, 10]
const pares: number[] = numeros.filter((n) => n % 2 === 0); // [2, 4]
const suma: number = numeros.reduce((acc, n) => acc + n, 0); // 15
console.log(`dobles: $${dobles}`)
console.log(`Pares: $${pares}`)
console.log(`Dobles: $${suma}`)

// Mutación (cambia el array original)
numeros.push(6); 
console.log(`Arreglos Numeros: $${numeros}`)      // agrega al final
numeros.unshift(0);  
console.log(`Arreglos Numeros: $${numeros}`)   // agrega al inicio
const ultimo = numeros.pop();   // elimina y devuelve el último
console.log(`Arreglos Numeros: $${numeros}`) 
const primero = numeros.shift(); // elimina y devuelve el primero
console.log(`Arreglos Numeros: $${numeros}`) 


// Búsqueda
const existe: boolean = numeros.includes(3);       // true
console.log(`Existe 3: ${existe}`)
const indice: number = numeros.indexOf(3); 
console.log(`Existe 3: ${indice}`)        // posición o -1
const encontrado: number | undefined = numeros.find((n) => n > 4); // 5
console.log(`Valor econtrado mayor a 4: ${indice}`)