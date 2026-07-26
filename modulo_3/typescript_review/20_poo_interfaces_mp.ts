// Concepto puro
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class SolicitudAdopcion implements Serializable, Validable {
  constructor(
    public id: string,
    public mascotas: string[],
    public cuota: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, mascotas: this.mascotas, cuota: this.cuota });
  }

  esValido(): boolean {
    return this.mascotas.length > 0 && this.cuota > 0;
  }
}

const solicitud = new SolicitudAdopcion("AD-001", ["Luna", "Max"], 130);
console.log(solicitud.esValido());    // true
console.log(solicitud.serializar());
// {"id":"AD-001","mascotas":["Luna","Max"],"cuota":130}
