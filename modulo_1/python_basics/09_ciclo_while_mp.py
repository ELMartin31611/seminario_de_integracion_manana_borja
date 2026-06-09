contador = 1
while (contador <=5):
    print(f"contador: {contador}")
    contador +=1

print("control de ciclo")
print("continue")
i = 1
while (i <=5):
    i += 1
    if i == 3:
        continue
    print(f"contador: {i}")
print("break")
i = 1
while (i <=5):
    i += 1
    if i == 3:
        break
    print(f"contador: {i}")

mascota = input("INGRESE NOMBRE DE MASCOTA A ADOPTAR: ")
while mascota !="salir":
    print("Mascota registrada:", mascota)
    mascota = input("INGRESE NOMBRE DE MASCOTA A ADOPTAR: ")



contador = 1
while (contador <=5):
    print(f"contador: {contador}")
    contador +=1
else:
    print("Fin del ciclo")


codigo = int(input("INGRESE CODIGO DE ADOPTANTE: "))
while codigo !=123:
    print("codigo incorrecto")    
    
else:
    print("Adopcion permitida")
