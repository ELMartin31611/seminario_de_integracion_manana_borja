print("funciones en python")
print("funciones basicas")

def registrar_mascota():
    print("Mascota registrada en el refugio")


registrar_mascota()
    

def registrar_con_nombre(nombre):
    print(f"Hola: {nombre}, bienvenido al refugio")

registrar_con_nombre("Firulais")
registrar_con_nombre("Luna")



print("funcion que devuelve valor con return")

def calcular_costo(dias, tarifa):
    return dias * tarifa

print(calcular_costo(4, 8))



print("funcion parametros por posicion")

def presentar_mascota(nombre, edad, especie):
    print(f"{nombre}, {edad}, {especie}")


presentar_mascota("Rex", 3, "Perro")                                      # por posicion
presentar_mascota(especie="Gato", nombre="Luna", edad=2)                  # por nombre



print("funcion parametros por defecto")

def saludo_mascota(nombre, saludo="Bienvenido", puntuacion="!"):
    print(f"{saludo}, {nombre}, {puntuacion}")


saludo_mascota("Rex", "Hola pequeno", "...")
saludo_mascota("Luna", puntuacion= "...")
saludo_mascota("Coco", "Feliz adopcion")


print("funcion parametros posicionales")

def sumar_costos(*args):
    print(f"argumentos recibidos {args}")
    return sum(args)

print(sumar_costos(1,2,3))
print(sumar_costos(1,2,3,4,5,6,7))
print(sumar_costos(10,20,22))



print("funciones parametros combinados con posicional")
def mostrar_info_mascota(titulo, *datos):
    print(f"argumentos recibidos {titulo} {datos}")
    print(titulo)
    for dato in datos:
        print(f" - {dato}")

mostrar_info_mascota("Mascotas disponibles", "Perro", "Gato", "Conejo", "Pajaro")



print("Funcion parametros clave valor variables")
def crear_perfil_mascota(**kwargs):
    print(f"argumentos recibidos {kwargs}")
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

crear_perfil_mascota(nombre="Luna", especie="Gato", edad=2, refugio="Quito")




def configurar_adopcion(refugio, *mascotas, activo=False, **opciones):
    print(f"refugio: {refugio}")
    print(f"mascotas: {mascotas}")
    print(f"activo: {activo}")
    print(f"opciones: {opciones}")


configurar_adopcion("RefugioUTE", "Rex","Luna","Coco", activo=True, cupo=30, horario="9-18")




print("Devolver multiples valores")
def minmax_edad(edades):
    return min(edades), max(edades)
minimo, maximo = minmax_edad([3,5,7,2,8,9])
print(f"Minimo {minimo}, Maximo {maximo}")
_, maximo= minmax_edad([1,2,4,6,10])
print(f"solo maximo {maximo}")



print("Devolver diccionario en el caso de muchos valores")
def analizar_adopciones(numeros):
    total= sum(numeros)
    n= len (numeros)
    return{

        "total": total,
        "media":total/n if n > 0 else 0,
        "minimo": min(numeros) if numeros else None,
        "maximo": max(numeros) if numeros else None,
        "count": n
    }

datos =  [12,88,44,55,23,45]
stats = analizar_adopciones(datos)
print(f"total: {stats['total']}")
print(f"media: {stats['media']:.2f}")
print(f"rango: {stats['minimo']} - {stats['maximo']}")



print("funciones lambdas")
def doble_costo(x):
    return x*2
doble_lambda= lambda x: x*2
print(doble_costo(2))
print(doble_lambda(2))
suma_costos=lambda a,b: a + b
print(suma_costos(5,4))
