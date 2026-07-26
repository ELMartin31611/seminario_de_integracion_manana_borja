// Concepto puro
abstract class MascotaAdoptable {
  abstract cuota(): number;       // sin implementación — las subclases DEBEN implementarlo
  abstract describir(): string;

  // Los métodos concretos SÍ tienen implementación
  ficha(): string {
    return (
      `${this.describir()} | ` +
      `Cuota: $${this.cuota().toFixed(2)}`
    );
  }
}

class PerroAdoptable extends MascotaAdoptable {
  constructor(private nombre: string, private edad: number) {
    super();
  }

  override cuota(): number {
    return 50 + this.edad * 10;
  }

  override describir(): string {
    return `Perro: ${this.nombre} (${this.edad} años)`;
  }
}

class GatoAdoptable extends MascotaAdoptable {
  constructor(private nombre: string, private edad: number) {
    super();
  }

  override cuota(): number {
    return 30 + this.edad * 5;
  }

  override describir(): string {
    return `Gato: ${this.nombre} (${this.edad} años)`;
  }
}

// const m = new MascotaAdoptable(); // Error: Cannot create an instance of an abstract class.

const perro = new PerroAdoptable("Rocky", 3);
const gato = new GatoAdoptable("Luna", 2);

console.log(perro.ficha()); // Perro: Rocky (3 años) | Cuota: $80.00
console.log(gato.ficha());  // Gato: Luna (2 años) | Cuota: $40.00
