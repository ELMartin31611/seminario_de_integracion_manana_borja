print("lista")
print("Crear lista")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5,6,7]
print(numeros)
mascotas=["perro","gato","conejo","hamster","pajaro", "tortuga"]
print(mascotas)
mixta=[1,"Luna", "Perro", True, None, 3.4]
print(mixta)

anidada=[1,[5,5,[6,4,4]],5,7]
print(anidada)

print("Acceso a los elementos de una lista")
print(mascotas[0])
print(mascotas[-1])
print(mascotas[1:3])
print(mascotas[::-1])

print("CRUD de una lista")
refugio=["perro", "gato","conejo","hamster"]
#agregar
refugio.append("tortuga")
print(refugio)
refugio.insert(1,"pajaro")
print(refugio)
refugio.extend(["iguana","conejo enano"])
#modificar
refugio[0]="perro labrador"
print(refugio)

#eliminar elementos
refugio.remove("hamster")
print(refugio)
eliminar= refugio.pop()
print(refugio)
eliminar= refugio.pop(0)
print(refugio)
del refugio[0]
print(refugio)

print("Buscar valores en los elementos de una lista")

print("iguana" in refugio)
print(refugio.index("iguana"))
print(refugio.count("iguana"))


print("Ordenar una lista ")
edades_desordenadas=[3,2,6,4,9,0,1,2]
print(edades_desordenadas)

edades_desordenadas.sort()
print(edades_desordenadas)
edades_desordenadas.sort(reverse=True)
print(edades_desordenadas)
ordenada= sorted(edades_desordenadas)
print(edades_desordenadas)
print(ordenada)
