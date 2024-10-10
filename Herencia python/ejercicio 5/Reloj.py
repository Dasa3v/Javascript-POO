class Reloj:
    # Constructor
    def __init__(self, marca, material, tipo):
        self.marca = marca
        self.material= material
        self.tipo = tipo
        self.precio= int(input("Ingrese el precio del reloj: "))

    # Método público
    def registrar(self):
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("INSTRUMENTO REGISTRADO")
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("Marca: ", self.marca)
        print("Material: ", self.material)
        print("Precio: ", self.tipo)
        print("Precio del reloj: ", self.precio)

class RelojInteligente(Reloj):  # Subclase Guitarra
    # Constructor
    def __init__(self, marca, material, tipo, pantalla):
        super().__init__(marca, material, tipo)  # Llamada correcta a super
        self.pantalla = pantalla  # Atributo de la clase Guitarra
        self.sistemaO = input("Ingrese el sistema operativo del reloj: "))  # Atributo ingresado por el usuario
        self.bateria = int(input("nivel de bateria: "))
    # Método privado
    def ajustar_bateria(self):
        print("Tipo de pantalla: ", self.pantalla)
        print("Sistema operativo del reloj: ", self.sistemaO)
        print("El nivel de bateria del reloj es: ", self.bateria)

        if self.bateria > 0:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"El reloj {self.marca}, de material {self.material} y de tipo {self.tipo} puede ENCENDER !!")
        else:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"El reloj {self.marca}, de material {self.material} y de tipo {self.tipo}  no puede ENCENDER por favor conectela a una toma de corriente")

# Instanciando la subclase Guitarra
objeto_Guitarra = RelojInteligente('samsung', 'galaxy watch 7', 'Android 8', 'tactil')     
objeto_Guitarra.registrar()  # Registrando el RelojInteligente
objeto_Guitarra.ajustar_bateria()  # Ajustando el RelojInteligente
