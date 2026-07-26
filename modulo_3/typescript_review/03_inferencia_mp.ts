// ── Anotación explícita ───────────────────────────────────────────────────
// Tú le dices a TS cuál es el tipo.
const codigoMascota: number = 101;
const nombreMascota: string = "Luna";
const estaVacunada: boolean = true;

// ── Inferencia de tipo ────────────────────────────────────────────────────
// TS lo deduce del valor inicial — el tipo es el mismo, pero sin escribirlo.
const codigoMascota2 = 101;     // TypeScript infiere: number
const nombreMascota2 = "Luna";  // TypeScript infiere: string
const estaVacunada2 = true;     // TypeScript infiere: boolean

// Ambas formas producen el mismo nivel de seguridad de tipos.
// Si intentas reasignar con el tipo incorrecto, TS da error en ambos casos:
// codigoMascota2 = "102";  // Error: Type 'string' is not assignable to type 'number'.

// ── Cuándo anotar explícitamente ─────────────────────────────────────────
// 1. Variables declaradas sin valor inicial:
let edadMascota: number;      // sin inicializar — necesita anotación
edadMascota = 2;

// 2. Cuando quieres un tipo más amplio que el valor inicial:
let ficha: number | string = 200;  // acepta número o string
ficha = "APROBADA";  // válido

// 3. Parámetros de funciones (TS no puede inferirlos):
function buscarMascota(nombre: string, intentos: number): string {
  return `Buscando a ${nombre} — ${intentos} intento(s)`;
}

// Las variables de estado de un refugio: cuándo anotar y cuándo inferir.

const NOMBRE_REFUGIO = "Huellitas Felices";  // inferido: string — claro del valor
const CUPOS_DEFAULT  = 20;                   // inferido: number
const ES_PRODUCCION  = true;                 // inferido: boolean

// Variables que cambian durante la vida del refugio:
let adopcionesRealizadas: number = 0;        // anotación: se inicializa en 0 pero cambia
let ultimoError: string | null = null;       // anotación: puede ser null al inicio

// Función con anotaciones completas (necesarias en parámetros):
function registrarAdopcion(nombreMascota: string, codigoEstado: number): void {
  adopcionesRealizadas++;
  console.log(`[${NOMBRE_REFUGIO}] ${codigoEstado} ${nombreMascota} — total: ${adopcionesRealizadas}`);
}

registrarAdopcion("Max", 200);
registrarAdopcion("Michi", 404);
// [Huellitas Felices] 200 Max — total: 1
// [Huellitas Felices] 404 Michi — total: 2
