// Concepto puro — template literals (backtick ``)
const nombre: string = "Carlos";
const rol: string    = "adoptante";
const visitas: number = 3;

// Interpola cualquier expresión con ${ }
const bienvenida: string = `Bienvenido, ${nombre}. Rol: ${rol}. Visitas: ${visitas}.`;
console.log(bienvenida);
// Bienvenido, Carlos. Rol: adoptante. Visitas: 3.

// Expresiones dentro de ${ }
const cuota: number = 50;
const iva: number   = 0.19;
const total: string = `Cuota de adopción con IVA: $${(cuota * (1 + iva)).toFixed(2)}`;
console.log(total);
// Cuota de adopción con IVA: $59.50

// Multi-línea — sin concatenación ni \n
let refugio: string = "Huellitas-02";
let estadoRefugio: boolean = true;
let ocupacion: number = 87.5;

const reporte: string = `
=== Reporte del refugio ===
Refugio  : Huellitas-01
Estado   : abierto
Ocupación: 90%
`;
console.log(reporte);

const reporte2: string = `
=== Reporte del refugio ===
Refugio  : ${refugio}
Estado   : ${estadoRefugio ? "Abierto" : "Cerrado"}
Ocupación: ${ocupacion}%
`;
console.log(reporte2);
