print("Condicionales Simples")
edad= input("Incluye edad? ")
if(int(edad) >= 18):
    print("Eres mayor de edad")

print("Condicionales dos caminos")
temperatura= input("Incluye temperatura? ")
if(int(temperatura) >= 38):
    print("temperatura alta")
else:
    print("temperatura normal")

print("condicionales multiples")
nota=input ("Incluir nota:")
if (int(nota) >=90):
    print("Excelente")
elif (int(nota)>=80):
    print("Bueno")
elif(int(nota)>70):
    print("Aprobado")
else:
    print("Reprobado")
    
print("Condicionales if anidados")
tiene_reserva=True
dinero=25
plato="pizza"

if(tiene_reserva):
    if(dinero>=20):
        if plato=="pizza":
            print("Tu pizza cuest $20. Pedido confirmado")
        else:
            print("Plato no disponible")
    else:
        print("Dinero insuficiente")
else:
    print("No tienes reserva")


meses=input("cuaanto tiempo lleva traabajando: ")
calificacion=input("cual es tu calificacion: ")
sueldo=input("cual es tu sueldo: ")
if(int(meses)>=12):
    if(int(calificacion)>=8):
        if(int(sueldo)>=1000):
            print("optar  bono de 100$")
        else:
            print("optar al bono de 200$")
    else:
        print("no puede optar al bono por baja calificacion")
else:
    print("no puede optar al bono por no tener año en la empresa")


