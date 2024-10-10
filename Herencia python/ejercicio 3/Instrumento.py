class Instrumento:
    # Constructor
    def __init__(self, marca, material, tipo):
        self.marca = marca
        self.material = material
        self.tipo = tipo
        self.precio = int(input("Ingrese el precio en pesos: "))

    # Método público
    def registrar(self):
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("INSTRUMENTO REGISTRADO")
        print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
        print("Marca: ", self.marca)
        print("Material: ", self.material)
        print("Precio: ", self.precio, "Pesos")
        print("Tipo de guitarra: ", self.tipo)

class Guitarra(Instrumento):  # Subclase Guitarra
    # Constructor
    def __init__(self, marca, material, tipo, cuerdas):
        super().__init__(marca, material, tipo)  # Llamada correcta a super
        self.cuerdas = cuerdas  # Atributo de la clase Guitarra
        self.acordes = int(input("Ingrese cuantos acordes conoce: "))  # Atributo ingresado por el usuario

    # Método privado
    def ajustar_guitarra(self):
        print("Número de cuerdas: ", self.cuerdas)
        print("Acordes: ", self.acordes)

        if self.acordes > 2:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"La guitarra {self.marca}, de material {self.material} y de tipo {self.tipo} puede usarla correctamente !!")
        else:
            print("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
            print(f"La guitarra {self.marca}, de material {self.material} y de tipo {self.tipo} no puede usarla correctamente, practique más.")

# Instanciando la subclase Guitarra
objeto_Guitarra = Guitarra('Femmto', 'Caoba', 'Acústica', '6 cuerdas')     
objeto_Guitarra.registrar()  # Registrando la guitarra
objeto_Guitarra.ajustar_guitarra()  # Ajustando la guitarra
