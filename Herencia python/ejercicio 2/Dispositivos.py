class Dispositivos:
    #Constructor
    def __init__(self, marca, modelo, año):
        self.marca = marca
        self.modelo = modelo
        self.año = año
        self.bateria = int(input("Capacidad de bateria: "))

    #Métodos público
    def registrar(self):
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("ELECTRODOMÉSTICO REGISTRADO")
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("Marca: ", self.marca)
        print("Modelo: ", self.modelo)
        print("Año: ", self.año)
        print("Consumo Eléctrico: ", self.bateria)
class Smartphone(Dispositivos):  #Subclase Electrodomestico
    #Constructor
    def __init__(self, marca, modelo, año):
        super().__init__(marca, modelo, año)  #super clase heredada
        self.sistema_operativo = input("Ingrese el sistema operativo del celular: ")  #atributo ingresado por el usuario
        self.conectividad = int(input("Ingrese el tipo de conectividad: "))
        self.nivel_bateria = int(input("Ingrese el nivel de bateria del celular: "))
    #Método privado
    def ajustar_bateria(self):
        print("conectividad: ", self.conectividad,"G")
        print("Nivel de la bateria: ", self.nivel_bateria)

        if self.nivel_bateria > 0:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"El smartphone {self.marca}, de modelo {self.modelo} Enciende !!")
        else:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"El smartphone {self.marca}, de modelo {self.año} no Enciende, Recargue su smartphone")

#Instanciando la subclase smartphone
objeto_Smartphone = Smartphone('Samsung', 'A02s', '2022')     
objeto_Smartphone.registrar()  #registrando el smartphone
objeto_Smartphone.ajustar_bateria()    #enfriando el smartphone

