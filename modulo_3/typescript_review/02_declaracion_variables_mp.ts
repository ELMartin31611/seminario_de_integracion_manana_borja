// const — valor que NO cambia (preferida por defecto)
const CAPACIDAD_REFUGIO: number = 50;
const NOMBRE_APP: string = "AdoptaPet";
const DEBUG_MODE: boolean = false;

// let — valor que SÍ puede cambiar
let mascotasDisponibles: number = 0;
let estadoRefugio: string = "cerrado";
let adopcionAbierta: boolean = false;
console.log(`mascotas disponibles : ${mascotasDisponibles}
    estado refugio: ${estadoRefugio}
    adopcion abierta: ${adopcionAbierta}`);


mascotasDisponibles++;              // 1
estadoRefugio = "abierto";          // ok
adopcionAbierta = true;             // ok


console.log(`mascotas disponibles : ${mascotasDisponibles}
    estado refugio: ${estadoRefugio}
    adopcion abierta: ${adopcionAbierta}`);

// CAPACIDAD_REFUGIO = 100;  // ← Error: Cannot assign to 'CAPACIDAD_REFUGIO' because it is a constant.
