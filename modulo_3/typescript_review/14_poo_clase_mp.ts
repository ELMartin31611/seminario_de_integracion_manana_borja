// Concepto puro
class Mascota {
  nombre: string;
  cuota: number;
  disponible: boolean;

  constructor(nombre: string, cuota: number, disponible: boolean) {
    this.nombre = nombre;
    this.cuota = cuota;
    this.disponible = disponible;
  }

  // Método: acción que puede realizar la instancia
  describir(): string {
    const estado = this.disponible ? "disponible" : "adoptada";
    return `${this.nombre} — $${this.cuota} (${estado})`;
  }
}

const luna = new Mascota("Luna", 50, true);
const rocky = new Mascota("Rocky", 90, false);

console.log(luna.describir());  // Luna — $50 (disponible)
console.log(rocky.describir()); // Rocky — $90 (adoptada)
