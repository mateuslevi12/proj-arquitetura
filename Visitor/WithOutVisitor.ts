class Food {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }

    calculateTaxes(): number {
        return this.price + this.price * 0.05; 
    }
}

class Cigarette {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }

    calculateTaxes(): number {
        return this.price + this.price * 1.55; 
    }
}

class AlcoholicDrink {
    constructor(private price: number) {}

    getPrice(): number {
        return this.price;
    }

    calculateTaxes(): number {
        return this.price + this.price * 0.5; 
    }
}

// Usando as classes sem o Visitor
const food = new Food(10);
const cigarette = new Cigarette(5);
const drink = new AlcoholicDrink(20);

console.log(food.calculateTaxes()); 
console.log(cigarette.calculateTaxes());  
console.log(drink.calculateTaxes()); 

const cart = [food, drink, drink]

const total = cart.reduce((total, item) => total + item.calculateTaxes(), 0)

console.log('Total com taxas:', total);