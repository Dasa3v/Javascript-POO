class Electrodomestico:
    #Constructor
    def __init__(self, marca, color, capacidad):
        self.marca = marca
        self.color = color
        self.capacidad = capacidad
        self.consumo_electrico = int(input("Consumo eléctrico: "))

    #Métodos público
    def registrar(self):
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("ELECTRODOMÉSTICO REGISTRADO")
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("Marca: ", self.marca)
        print("Color: ", self.color)
        print("Capacidad: ", self.capacidad)
        print("Consumo Eléctrico: ", self.consumo_electrico)

class Refrigerador(Electrodomestico):  #Subclase Electrodomestico
    #Constructor
    def __init__(self, marca, color, capacidad):
        super().__init__(marca, color, capacidad)  #super clase heredada
        self.tipo_refrigerador = input("Ingrese el tipo de refrigerador: ")  #atributo ingresado por el usuario
        self.temperatura = int(input("Ingrese la temperatura de enfriado de la nevera: "))

    #Método privado
    def ajustar_temperatura(self):
        print("Tipo de refrigerador: ", self.tipo_refrigerador)

        if self.temperatura > 5:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"El refrigerador {self.marca}, de color {self.color} funciona !!")
        else:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"El refrigerador {self.marca}, de color {self.color} no funciona, llévelo a revisar")

#Instanciando la subclase refrigerador
objeto_Refrigerador = Refrigerador('Samsung', 'Plateado', '540 litros')     
objeto_Refrigerador.registrar()  #registrando el refrigerador
objeto_Refrigerador.ajustar_temperatura()    #enfriando el refrigerador

