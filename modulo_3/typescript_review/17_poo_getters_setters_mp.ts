// Concepto puro
class Jaula {
  private _capacidad: number;

  constructor(capacidad: number) {
    this._capacidad = capacidad;
  }

  get capacidad(): number {
    return this._capacidad;
  }

  set capacidad(valor: number) {
    if (valor <= 0) throw new Error("La capacidad debe ser positiva");
    this._capacidad = valor;
  }

  get espacioLibre(): number {
    return this._capacidad; // simplificado: capacidad total como espacio libre
  }
}

const j = new Jaula(5);
console.log(j.capacidad);           // 5   ← usa el getter
console.log(j.espacioLibre);        // 5

j.capacidad = 10;                   // usa el setter
console.log(j.espacioLibre);        // 10

// j.capacidad = -3;  // Error: La capacidad debe ser positiva
