class Animal:
    def __init__(self, name, age, habitat):
        self.name = name
        self.age = age
        self.habitat = habitat

    def move(self):
        return "Animal is moving"

    def sound(self):
        return "Some sound"

    def __str__(self):
        return f"{self.name}, Age: {self.age}, Habitat: {self.habitat}"


class WildAnimal(Animal):
    def __init__(self, name, age, habitat, danger_level):
        super().__init__(name, age, habitat)
        self.danger_level = danger_level

    def sound(self): 
        return "Roar! 🐾"

    def hunt(self):
        return f"{self.name} is hunting."


class DomesticAnimal(Animal):
    def __init__(self, name, age, habitat, owner):
        super().__init__(name, age, habitat)
        self.owner = owner

    def sound(self):
        return "Friendly sound 🐶"

    def play(self):
        return f"{self.name} is playing with {self.owner}."