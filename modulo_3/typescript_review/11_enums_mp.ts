// Enum numérico (los valores son 0, 1, 2, … por defecto)
enum ZonaRefugio {
  Norte,  // 0
  Sur,    // 1
  Este,   // 2
  Oeste,  // 3
}

const zona: ZonaRefugio = ZonaRefugio.Norte;
console.log(zona);              // 0
console.log(ZonaRefugio[0]);    // "Norte" (mapeo inverso automático)

// Enum numérico con valor de inicio personalizado
enum CodigoAdopcion {
  Aprobada = 200,
  NoEncontrada = 404,
  Rechazada = 500,
}

// Enum de string (recomendado: los valores son legibles en logs y redes)
enum Rol {
  Admin     = "ADMIN",
  Cuidador  = "CUIDADOR",
  Adoptante = "ADOPTANTE",
}

const miRol: Rol = Rol.Adoptante;
console.log(miRol); // "ADOPTANTE"
