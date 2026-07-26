// Concepto puro — dos sintaxis equivalentes
const edades: number[] = [1, 2, 3, 4, 5];
const nombres: Array<string> = ["Luna", "Max", "Michi"];   // forma genérica

// TypeScript infiere el tipo del array si lo inicializas
const inferido = [10, 20, 30]; // number[] inferido

console.log(`Edades: ${edades}`)
console.log(`Nombres: ${nombres}`)
console.log(`Inferidos: ${inferido}`)
// Métodos tipados: el compilador conoce el tipo del elemento
const dobles: number[] = edades.map((n) => n * 2);       // [2, 4, 6, 8, 10]
const pares: number[] = edades.filter((n) => n % 2 === 0); // [2, 4]
const suma: number = edades.reduce((acc, n) => acc + n, 0); // 15
console.log(`dobles: ${dobles}`)
console.log(`Pares: ${pares}`)
console.log(`Suma: ${suma}`)

// Mutación (cambia el array original)
edades.push(6);
console.log(`Edades: ${edades}`)      // agrega al final
edades.unshift(0);
console.log(`Edades: ${edades}`)   // agrega al inicio
const ultimo = edades.pop();   // elimina y devuelve el último
console.log(`Edades: ${edades}`)
const primero = edades.shift(); // elimina y devuelve el primero
console.log(`Edades: ${edades}`)


// Búsqueda
const existe: boolean = edades.includes(3);       // true
console.log(`Existe 3: ${existe}`)
const indice: number = edades.indexOf(3);
console.log(`Índice de 3: ${indice}`)        // posición o -1
const encontrado: number | undefined = edades.find((n) => n > 4); // 5
console.log(`Valor encontrado mayor a 4: ${encontrado}`)
