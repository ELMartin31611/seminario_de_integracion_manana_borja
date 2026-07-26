// Concepto puro
class ExpedienteAdopcion {
  readonly id: string;           // no cambia tras la creación
  public adoptante: string;      // visible desde fuera
  private cuotaPendiente: number; // solo accesible dentro de la clase
  protected moneda: string;      // accesible también en subclases

  constructor(id: string, adoptante: string, cuotaInicial: number) {
    this.id = id;
    this.adoptante = adoptante;
    this.cuotaPendiente = cuotaInicial;
    this.moneda = "COP";
  }

  // Método público que expone la cuota de forma controlada
  obtenerCuotaPendiente(): number {
    return this.cuotaPendiente;
  }

  abonar(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.cuotaPendiente -= monto;
  }
}

const expediente = new ExpedienteAdopcion("AD-001", "Ana García", 100);
console.log(expediente.adoptante);              // Ana García
console.log(expediente.id);                     // AD-001
console.log(expediente.obtenerCuotaPendiente()); // 100
expediente.abonar(40);
console.log(expediente.obtenerCuotaPendiente()); // 60


// expediente.cuotaPendiente = 0;  // Error: 'cuotaPendiente' is private
// expediente.id = "otro";         // Error: 'id' is readonly
