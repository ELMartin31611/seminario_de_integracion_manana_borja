print("match-case")
comando= input("comaaando proceso iniciaaar/parar/reiniciaar:")
match comando:
    case "iniciar":
        print("Sistema iniciaado")
    case "parar":
        print("deteniendose")
    case "reiniciar":
        print("reiniciando el sistema")
    case _:
        print(f"comando '{comando}' no encontrado")

print("match condiciones")

numero=7

match numero:
    case n if n<0:
        print(f"{n} es negaativo")
    case 0:
        print("es cero")
    case n if  n%2==0:
        print(f"{n} es par")
    case n:
        print(f"{n} es positivo e impar")