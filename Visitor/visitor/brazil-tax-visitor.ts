import { AlcoholicDrink } from '../element/alcoholic-drink';
import { Cigarette } from '../element/cigarette';
import { Food } from '../element/food';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class BrazilTaxVisitor implements TaxVisitorProtocol {

    calculateTaxesForFood(food: Food): number {
        return food.getPrice() + food.getPrice() * 0.05
    }

    calculateTaxesForCigarette(Cigarette: Cigarette): number {
        return Cigarette.getPrice() + Cigarette.getPrice() * 1.55 
    }

    calculateTaxesForAlcoholicDrink(AlcoholicDrink: AlcoholicDrink): number {
        return AlcoholicDrink.getPrice() + AlcoholicDrink.getPrice() * 0.5 
    }
}