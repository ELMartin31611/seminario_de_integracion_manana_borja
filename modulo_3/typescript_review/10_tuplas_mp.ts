// Concepto puro
type Ubicacion = [number, number];           // [lat, lng]
type RGB = [number, number, number];         // [rojo, verde, azul]
type Ficha = [string, number];               // [nombre, edad]

const punto: Ubicacion = [4.71, -74.07];     // Bogotá
const color: RGB = [255, 128, 0];            // naranja
const par: Ficha = ["Luna", 2];

// Desestructuración (la forma más cómoda de usar tuplas)
const [lat, lng] = punto;
const [rojo, verde, azul] = color;
const [nombre, edad] = par;

console.log(`Ubicación: lat=${lat}, lng=${lng}`);
console.log(`Color: rgb(${rojo},${verde},${azul})`); // Color: rgb(255,128,0)
console.log(`Ficha: ${nombre} tiene ${edad} años`);

// Tuplas con nombre (TS 4.0+) — mejoran la legibilidad
type HorarioVisita = [inicio: number, fin: number];
const horario: HorarioVisita = [9, 17];      // de 9:00 a 17:00
