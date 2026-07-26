// Union de literales: más simple, cero código JS generado
type EstadoAdopcion = "pendiente" | "en_revision" | "aprobada" | "rechazada";
type Urgencia = "baja" | "media" | "alta";

function procesarSolicitud(id: number, estado: EstadoAdopcion): void {
  console.log(`Solicitud #${id}: ${estado}`);
}

procesarSolicitud(1, "en_revision"); // ok
// procesarSolicitud(2, "cancelada"); // Error de compilación: no es un EstadoAdopcion válido

type PrioridadAdopcion = "baja" | "media" | "alta" | "urgente";

interface Solicitud {
  id: number;
  mascota: string;
  prioridad: PrioridadAdopcion;
  resuelta: boolean;
}

function etiquetarSolicitud(s: Solicitud): string {
  const prefijos: Record<PrioridadAdopcion, string> = {
    baja:    "⚪",
    media:   "🟡",
    alta:    "🟠",
    urgente: "🔴",
  };
  const estado = s.resuelta ? "✅" : "⏳";
  return `${estado} ${prefijos[s.prioridad]} [#${s.id}] ${s.mascota}`;
}

const solicitudes: Solicitud[] = [
  { id: 1, mascota: "Luna — gato",   prioridad: "baja",    resuelta: true  },
  { id: 2, mascota: "Rocky — perro", prioridad: "urgente", resuelta: false },
  { id: 3, mascota: "Michi — gato",  prioridad: "media",   resuelta: false },
];

for (const s of solicitudes) {
  console.log(etiquetarSolicitud(s));
}
// ✅ ⚪ [#1] Luna — gato
// ⏳ 🔴 [#2] Rocky — perro
// ⏳ 🟡 [#3] Michi — gato
