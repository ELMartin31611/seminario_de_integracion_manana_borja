// number — enteros y decimales, positivos y negativos
const cuotaAdopcion: number = 45.50;
const edadMeses: number     = 8;
const temperatura: number   = -2.5;
const hexColor: number      = 0xff5733;  // también acepta hexadecimal

// string — texto, con comillas simples, dobles o backtick
const email: string     = "contacto@huellitas.com";
const especie: string   = 'perro';
const ruta: string      = `/api/v2/mascotas`;

// boolean — solo true o false
const estaDisponible: boolean = true;
const requiereChip: boolean   = false;
const esUrgente: boolean      = false;

// ── Aritmética con number ─────────────────────────────────────────────────
const costoBase = 80;
const descuento = 15;
const total = costoBase - descuento;  // 65

// ── Métodos de string ─────────────────────────────────────────────────────
const adoptante = "  ana@correo.com  ";
console.log(adoptante.trim().toLowerCase()); // "ana@correo.com"
console.log(email.includes("huellitas"));    // true
console.log(email.split("@")[1]);            // "huellitas.com"

let ficha: string = "Luna;gato;2;12-12-2024";
console.log(ficha.split(";"));
// ── Lógica con boolean ────────────────────────────────────────────────────
const puedeAdoptar: boolean = estaDisponible && !requiereChip;
console.log(puedeAdoptar); // true
