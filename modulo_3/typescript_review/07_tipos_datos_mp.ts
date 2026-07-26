// Concepto puro
const entero: number = 42;
const decimal: number = 3.14;
const negativo: number = -100;
const hexadecimal: number = 0xff;   // 255 en base 16
const binario: number = 0b1010;     // 10 en base 2
const octal: number = 0o17;         // 15 en base 8
const grande: number = 1_000_000;   // _ como separador visual (ES2021)

console.log(hexadecimal); // 255
console.log(binario);     // 10
console.log(grande);      // 1000000

// Constantes especiales de number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isFinite(1 / 0)); // false (Infinity no es finito)
console.log(Number.isNaN(0 / 0));    // true

// Concepto puro
const simple: string = "Hola Adopción";
const doble: string = 'También funciona';
const template: string = `Hola ${"adoptante"}`; // template literal

const nombre: string = "Luna";
const edad: number = 2;

// Interpolación: embebe expresiones dentro de ${}
const saludo: string = `Hola, soy ${nombre}. Tengo ${edad} años.`;
const apta: string = `Soy ${edad >= 1 ? "apta" : "aún no apta"} para adopción.`;

// Multilínea sin caracteres de escape
const mensaje: string = `
  Ficha 1
  Ficha 2
  Ficha 3
`.trim();

// Métodos comunes (tipados, el editor autocompleta)
console.log("  luna  ".trim());         // "luna"
console.log("luna".toUpperCase());      // "LUNA"
console.log("2024-06-15".split("-"));   // ["2024", "06", "15"]
console.log("error: ficha".includes("error")); // true
console.log("mascota.ts".endsWith(".ts"));     // true



// Concepto puro
const disponible: boolean = true;
const adoptada: boolean = false;

// Se infiere sin anotación explícita
const esAdulta = 25 >= 18;       // boolean inferido → true
const hayCupos = 0 > 0;          // boolean inferido → false

// Valores "falsy" en TypeScript/JavaScript (importantes para narrowing)
// false, 0, "", null, undefined, NaN → todos se comportan como false en un if
if (!hayCupos) {
  console.log("Sin cupos de adopción disponibles");
}


// Concepto puro
let sinAsignar: undefined = undefined;
let sinValor: null = null;

// En la práctica: propiedades opcionales o resultados de búsqueda
function buscarMascota(id: number): string | null {
  if (id === 1) return "Luna";
  return null; // encontrado = null cuando no existe
}

const mascota = buscarMascota(5);

// Operador de coalescencia nula ?? (devuelve el lado derecho si el izquierdo es null/undefined)
const nombreMascota = mascota ?? "Sin asignar";
console.log(nombreMascota); // "Sin asignar"

// Encadenamiento opcional ?. (no lanza error si algo es null/undefined)
const longitud = mascota?.length;
console.log(longitud); // undefined (no lanza error)
