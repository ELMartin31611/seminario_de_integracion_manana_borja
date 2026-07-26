// Sistema de cotización de adopción para un refugio de mascotas.
// Demuestra cómo los tipos previenen errores en lógica de negocio real.

type TamanoMascota = "pequeño" | "mediano" | "grande";

interface SolicitudAdopcion {
  nombreMascota: string;
  edadAnios: number;
  cuotaBase: number;
  tamano: TamanoMascota;
}

const TARIFAS_CUIDADO: Record<TamanoMascota, number> = {
  pequeño:  10.00,  // $ por año de edad
  mediano:  15.00,
  grande:   25.00,
};

const VACUNA_PCT = 0.10;  // 10% de la cuota base

function cotizarAdopcion(solicitud: SolicitudAdopcion): string {
  const tarifaCuidado = TARIFAS_CUIDADO[solicitud.tamano];
  const costoCuidado = tarifaCuidado * solicitud.edadAnios;
  const costoVacuna = solicitud.cuotaBase * VACUNA_PCT;
  const total = solicitud.cuotaBase + costoCuidado + costoVacuna;

  return `
🐾 Cotización de adopción
   Mascota     : ${solicitud.nombreMascota}
   Edad        : ${solicitud.edadAnios} año(s)
   Tamaño      : ${solicitud.tamano}
   Cuota base  : $${solicitud.cuotaBase.toFixed(2)}
   Cuidado     : $${costoCuidado.toFixed(2)}
   Vacuna      : $${costoVacuna.toFixed(2)}
   ─────────────────────────
   TOTAL       : $${total.toFixed(2)}
  `.trim();
}

const solicitud1: SolicitudAdopcion = {
  nombreMascota: "Rocky",
  edadAnios: 3,
  cuotaBase: 80,
  tamano: "grande",
};

const solicitud2: SolicitudAdopcion = {
  nombreMascota: "Michi",
  edadAnios: 1,
  cuotaBase: 40,
  tamano: "pequeño",
};

console.log(cotizarAdopcion(solicitud1));
console.log("---");
console.log(cotizarAdopcion(solicitud2));

// TS detecta si usas un tamaño inválido:
// const solicitud3: SolicitudAdopcion = { ..., tamano: "gigante" };
// Type '"gigante"' is not assignable to type 'TamanoMascota'.
