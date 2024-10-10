class Electronico:
    # Constructor
    def __init__(self, marca, modelo, tipo_procesador):
        self.marca = marca
        self.modelo = modelo
        self.tipo_procesador = tipo_procesador
        self.RAM = int(input("Ingrese cuanta memoria RAM tiene: "))

    # Método público
    def registrar(self):
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("INSTRUMENTO REGISTRADO")
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("Marca: ", self.marca)
        print("Modelo: ", self.modelo)
        print("Precio: ", self.tipo_procesador)
        print("Memoria RAM: ", self.RAM)

class Laptop(Electronico):  # Subclase Guitarra
    # Constructor
    def __init__(self, marca, modelo, tipo_procesador, disco):
        super().__init__(marca, modelo, tipo_procesador)  # Llamada correcta a super
        self.disco = disco  # Atributo de la clase Guitarra
        self.bateria = int(input("Ingrese cuanto es la duracion de la bateria: "))  # Atributo ingresado por el usuario

    # Método privado
    def ajustar_bateria(self):
        print("tipo de disco: ", self.disco)
        print("Duracion de bateria: ", self.bateria, "Horas")

        if self.bateria > 0:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"La Laptop {self.marca}, de modelo {self.modelo} y con procesador {self.tipo_procesador} puede ENCENDER !!")
        else:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"La guitarra {self.marca}, de material {self.modelo} y de tipo {self.tipo_procesador}  no puede ENCENDER por favor conectela a una toma de corriente")

# Instanciando la subclase Guitarra
objeto_Guitarra = Laptop('Hp', 'Victus', 'Intel Core i5 Intel® Core™ i5-11400H', 'SSD: 512GB')     
objeto_Guitarra.registrar()  # Registrando la Laptop
objeto_Guitarra.ajustar_bateria()  # Ajustando la Laptop
