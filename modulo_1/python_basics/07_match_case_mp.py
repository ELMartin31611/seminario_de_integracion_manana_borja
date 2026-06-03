print("match-case")
mascota= input("tipo de mascota perro/gato/conejo/pajaro:")
match mascota:
    case "perro":
        print("Mascota perro registrada")
    case "gato":
        print("Mascota gato registrada")
    case "conejo":
        print("Mascota conejo registrada")
    case "pajaro":
        print("Mascota pajaro registrada")
    case _:
        print(f"mascota '{mascota}' no disponible para adopcion")

print("match condiciones")

edad_mascota=3

match edad_mascota:
    case n if n<0:
        print(f"{n} edad invalida")
    case 0:
        print("recien nacida")
    case n if  n%2==0:
        print(f"{n} años, edad par")
    case n:
        print(f"{n} años, edad impar")
