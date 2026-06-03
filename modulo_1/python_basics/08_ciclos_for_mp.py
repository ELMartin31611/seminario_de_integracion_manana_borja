print("Ciclo for")
mascotas =["perro","gato", "conejo"]
for mascota in mascotas:
    print(mascota)


print("Recorrer palabras")
for letra in "mascota":
    print(letra)


print("Recorre rangos")
for i in range(1,6):
    print(i)


print("Recorre rango configurar pasos")
for i in range(1,10,2):
    print(i)


print(" Enumerar lista")
for i, mascotas in enumerate(mascotas):
    print(i,mascotas)



print("dos listas a la vez")
nombre=["luna", "rex"]
edad=[2,5]
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


print("Lista comprehension forma corta")
edades_mascotas=[x**2 for x in range (5)]
print(edades_mascotas)


adopciones = [120, 80, 200, 50, 300]

adopciones_validas = 0
bono_total = 0

for adopcion in adopciones:
    if adopcion > 100:
        adopciones_validas += 1
        
        if adopcion > 250:
            bono_total += 30
        else:
            bono_total += 10

print("Total de adopciones válidas:", adopciones_validas)
print("Total de bono acumulado: $", bono_total)
