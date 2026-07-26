// Concepto puro
class Mascota {
  nombre(): string { return "Mascota"; }
  cuota(): number { return 0; }
}

class Perro extends Mascota {
  constructor(private edad: number) { super(); }
  override nombre(): string { return "Perro"; }
  override cuota(): number { return 50 + this.edad * 10; }
}

class Gato extends Mascota {
  constructor(private edad: number) { super(); }
  override nombre(): string { return "Gato"; }
  override cuota(): number { return 30 + this.edad * 5; }
}

class Conejo extends Mascota {
  constructor(private edad: number) { super(); }
  override nombre(): string { return "Conejo"; }
  override cuota(): number { return 20 + this.edad * 3; }
}

// Array de tipo base — el polimorfismo en acción
const mascotas: Mascota[] = [
  new Perro(3),
  new Gato(2),
  new Conejo(1),
];

for (const m of mascotas) {
  // TypeScript llama la versión correcta de cuota() en cada iteración
  console.log(`${m.nombre()}: cuota = $${m.cuota().toFixed(2)}`);
}
// Perro: cuota = $80.00
// Gato: cuota = $40.00
// Conejo: cuota = $23.00
