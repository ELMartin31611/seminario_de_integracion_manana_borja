print("Ciclo for")
frutas =["manzana","banana", "pera"]
for fruta in frutas:
    print(fruta)


print("Recorrer palabras")
for letra in "frutas":
    print(letra)


print("Recorre rangos")
for i in range(1,6):
    print(i)


print("Recorre rango cnfigurar pasos")
for i in range(1,10,2):
    print(i)


print(" Enumerar lista")
for i, frutas in enumerate(frutas):
    print(i,frutas)



print("dos listas a la vez")
nombre=["ana", "luis"]
edad=[20,25]
for nombre, edad in zip(nombre, edad):
    print(nombre, edad)

print("control del ciclo")
print("break")
for i in range(5):
    if i==3:
        break
    print(i)
print("continue")
for i in range(5):
    if i==2:
        continue
    print(i)

print("for anidado")
for i in range(3):
    for j in range(2):
        print(i,j)


print("Lista comprehension dorma corta")
cuadrados=[x**2 for x in range (5)]
print(cuadrados)


ventas = [120, 80, 200, 50, 300]

ventas_validas = 0
bono_total = 0

for venta in ventas:
    if venta > 100:
        ventas_validas += 1
        
        if venta > 250:
            bono_total += 30
        else:
            bono_total += 10

print("Total de ventas válidas:", ventas_validas)
print("Total de bono acumulado: $", bono_total)