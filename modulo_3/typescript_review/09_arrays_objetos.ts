// Concepto puro
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
  existencia: number;
};

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop",  precio: 999,  disponible: true, existencia:5 },
  { id: 2, nombre: "Mouse",   precio: 25,   disponible: true, existencia:5 },
  { id: 3, nombre: "Monitor", precio: 350,  disponible: false, existencia:3 },
  { id: 4, nombre: "celular", precio: 350,  disponible: false, existencia:4 },
  { id: 5, nombre: "tablet", precio: 350,  disponible: false, existencia:1 },
];

// TypeScript sabe que cada "p" es de tipo Producto
const disponibles: Producto[] = catalogo.filter((p) => p.disponible);
const existencia: Producto[] = catalogo.filter((p) => p.existencia);
const nombres: string[] = catalogo.map((p) => p.nombre);
const masBarato: Producto | undefined = catalogo.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log(catalogo);
console.log(nombres);                  // ["Laptop", "Mouse", "Monitor"]
console.log(masBarato?.nombre);       // "Mouse"
console.log(disponibles.length);      // 2
console.log(existencia.length);
console.log(catalogo[4].existencia);
 
