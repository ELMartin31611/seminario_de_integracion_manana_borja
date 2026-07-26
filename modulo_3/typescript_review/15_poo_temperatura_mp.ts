class EdadMascota {
  valorAnios: number;
  valorMeses: number;

  constructor(anios: number, meses?: number) {
    this.valorAnios = anios ?? 0;
    this.valorMeses = meses ?? 0;
  }

  aMeses(): number {
    return this.valorAnios * 12 + this.valorMeses;
  }

  aAniosDesdeMeses(): void {
    this.valorAnios = Math.floor(this.valorMeses / 12);
    this.valorMeses = this.valorMeses % 12;
  }

  aSemanas(): number {
    return this.aMeses() * 4;
  }

  describir(): string {
    return (
      `${this.valorAnios} año(s) y ${this.valorMeses} mes(es) = ` +
      `${this.aMeses()} mes(es) = ` +
      `${this.aSemanas()} semana(s)`
    );
  }
}



const adulta = new EdadMascota(2, 3);
const cachorro = new EdadMascota(0, 6);
const desdeMeses = new EdadMascota(0, 26);


console.log(adulta.describir());     // 2 año(s) y 3 mes(es) = 27 mes(es) = 108 semana(s)
console.log(cachorro.describir());   // 0 año(s) y 6 mes(es) = 6 mes(es) = 24 semana(s)
desdeMeses.aAniosDesdeMeses();
console.log(desdeMeses.describir()); // 2 año(s) y 2 mes(es) = 26 mes(es) = 104 semana(s)
