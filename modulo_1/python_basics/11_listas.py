print("lista")
print("Crear listaa")
vacia=[]
print(vacia)
numeros=[1,2,3,4,5,6,7]
print(numeros)
nombres=["juan","pedro","carlos","maariaa","petra", " juana"]
print(nombres)
mixta=[1,"Hola", "Mundo", True, None, 3.4]
print(mixta)

anidada=[1,[5,5,[6,4,4]],5,7]
print(anidada)

print("Acceso a los elementos de unaa listaa")
print(nombres[0])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("CRUD de una lista")
frutas=["maanzaana", "pera","melon","banana"]
#aagregaar
frutas.append("durazno")
print(frutas)
frutas.insert(1,"naranja")
print(frutas)
frutas.extend(["kiwi","mango"])
#modificaar
frutas[0]="toronja"
print(frutas)

#eliminaar elemntos
frutas.remove("banana")
print(frutas)
eliminar= frutas.pop()
print(frutas)
eliminar= frutas.pop(0)
print(frutas)
del frutas[0]
print(frutas)

print("Buscr vlores en los elemntos de un listaa")

print("kiwi" in frutas)
print(frutas.index("kiwi"))
print(frutas.count("kiwi"))


print("Ordenar una lista ")
numeros_desordenados=[3,2,6,34,9,0,1,2]
print(numeros_desordenados)

numeros_desordenados.sort()
print(numeros_desordenados)
numeros_desordenados.sort(reverse=True)
print(numeros_desordenados)
ordenada= sorted(numeros_desordenados)
print(numeros_desordenados)
print(ordenada)


