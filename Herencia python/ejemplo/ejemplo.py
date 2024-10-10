class Vehiculo:
    #constructor
    def __init__(self, marca, color, modelo):
        self._marca = marca
        self.color = color
        self.modelo = modelo
        self.numero_llantas = int(input("No. de Llantas:"))

    #metodos público
    def registrar(self):
        print("------------------")
        print("CARRO REGISTRADO")
        print("------------------")
        print("Marca: ", self._marca)
        print("Color: ", self.color)
        print("Modelo: ", self.modelo)
        print("No. de Llantas: ", self.numero_llantas)


class Carro(Vehiculo): #subclase Carro
    #constructor
    def __init__(self, marca, color, modelo, placa):
        super().__init__(marca, color, modelo) #super clase heredada
        self.__placa = placa #atributo privado
        self.gasolina = int(input("No. de Galones de Gasolina: "))

    #metodo privado
    def encender(self):
        print("Placa: ", self.__placa) #imprimiendo la placa

        if self.gasolina > 0:
            print("------------------")
            print(f"EL carro {self._marca}, con placa {self.__placa} de color {self.color} enciende !!")
        else:
            print("------------------")
            print(f"EL carro {self._marca}, con placa {self.__placa} de color {self.color} no enciende !!")


#instanciando la subclase carro
objeto_carro = Carro('SUZUKI', 'Rojo', '2022', 'PPC 54C')
objeto_carro.registrar() #registrando el carro
objeto_carro.encender() #encendiendo el carro
