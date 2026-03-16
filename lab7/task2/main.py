from models import Animal, WildAnimal, DomesticAnimal

def main():

    animal1 = Animal("Unknown", 5, "Forest")
    wild1 = WildAnimal("Tiger", 4, "Jungle", "High")
    domestic1 = DomesticAnimal("Buddy", 3, "Home", "Alice")

    animals = [animal1, wild1, domestic1]

    for a in animals:
        print(a)
        print(a.move())
        print(a.sound())
        print("------")

    print(wild1.hunt())
    print(domestic1.play())


if __name__ == "__main__":
    main()