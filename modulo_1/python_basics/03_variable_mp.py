#Enteros, Cadena de caracteres, booleano, None
nombre = "Luna"              #STRING
edad = 2                     #INT
peso = 4.5                   #FLOAT
adoptado=True                #BOOLEAN
vacuna=None                  #NONETYPE



print (type(nombre))
print (type(edad))
print (type(peso))
print (type(adoptado))
print (type(vacuna))


#Asignar valor varias variables en una linea

a, b, c= 12, 13 ,14

print(a)
print(b)    
print(c)


#Asignar el mismo valor a varias variables

a= b= c= 0

print(a)
print(b)
print(c)

#Intercambiar valores 

x, y = 10, 20
print(x,y)
x,y = y,x
print(x,y)

# Convenciones de nombres

nombre_completo = "Max el Labrador"       #Snake_case
nombreCompleto= "Max el Labrador"         #no usar CamelCase
MAX_REINTENTOS= 3                         #MAYUSCULAS SOSTENIDAS para constantes
_variable_interna="private"               #para uso interno


#Manejo de Enteros
pequeno=42
negativo=-17
grande=1_000_000_000
enorme=2**100

print(pequeno)
print(negativo)
print(grande)
print(enorme)


#Base Numericas

binario=0b1010
octal=0o17
hexadecimal=0xFF

print(binario, octal, hexadecimal)

#convertir a decimal a otras bases

print(bin(255))
print(oct(255))
print(hex(255))
