print("Condicionales Simples")
edad= input("Incluye edad de la mascota? ")
if(int(edad) >= 1):
    print("La mascota es apta para adopcion")

print("Condicionales dos caminos")
peso= input("Incluye peso de la mascota en kg? ")
if(int(peso) >= 30):
    print("mascota de talla grande")
else:
    print("mascota de talla pequena")

print("condicionales multiples")
puntaje=input ("Incluir puntaje de evaluacion de adoptante:")
if (int(puntaje) >=90):
    print("Excelente adoptante")
elif (int(puntaje)>=80):
    print("Buen adoptante")
elif(int(puntaje)>70):
    print("Adoptante aprobado")
else:
    print("Adoptante rechazado")

print("Condicionales if anidados")
tiene_solicitud=True
dinero=25
mascota="perro"

if(tiene_solicitud):
    if(dinero>=20):
        if mascota=="perro":
            print("Tu perro cuesta $20. Adopcion confirmada")
        else:
            print("Mascota no disponible")
    else:
        print("Dinero insuficiente")
else:
    print("No tienes solicitud de adopcion")


meses=input("cuantos meses lleva el adoptante en el registro: ")
calificacion=input("cual es su calificacion: ")
ingreso=input("cual es su ingreso mensual: ")
if(int(meses)>=12):
    if(int(calificacion)>=8):
        if(int(ingreso)>=1000):
            print("puede adoptar mascota de alto costo")
        else:
            print("puede adoptar mascota de bajo costo")
    else:
        print("no puede adoptar por baja calificacion")
else:
    print("no puede adoptar por no tener un año en el registro")
