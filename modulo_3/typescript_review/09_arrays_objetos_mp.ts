// Concepto puro
type Mascota = {
  id: number;
  nombre: string;
  cuota: number;
  disponible: boolean;
  edadAnios: number;
};

const refugio: Mascota[] = [
  { id: 1, nombre: "Luna",  cuota: 50,  disponible: true,  edadAnios: 2 },
  { id: 2, nombre: "Max",   cuota: 80,  disponible: true,  edadAnios: 4 },
  { id: 3, nombre: "Michi", cuota: 40,  disponible: false, edadAnios: 1 },
  { id: 4, nombre: "Rocky", cuota: 90,  disponible: false, edadAnios: 5 },
  { id: 5, nombre: "Nala",  cuota: 60,  disponible: false, edadAnios: 3 },
];

// TypeScript sabe que cada "m" es de tipo Mascota
const disponibles: Mascota[] = refugio.filter((m) => m.disponible);
const conEdad: Mascota[] = refugio.filter((m) => m.edadAnios);
const nombres: string[] = refugio.map((m) => m.nombre);
const masBarata: Mascota | undefined = refugio.reduce((min, m) =>
  m.cuota < min.cuota ? m : min
);

console.log(refugio);
console.log(nombres);                  // ["Luna", "Max", "Michi", "Rocky", "Nala"]
console.log(masBarata?.nombre);       // "Michi"
console.log(disponibles.length);      // 2
console.log(conEdad.length);
console.log(refugio[4].edadAnios);
