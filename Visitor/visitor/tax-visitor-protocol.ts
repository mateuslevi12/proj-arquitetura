import { AlcoholicDrink } from "../element/alcoholic-drink";
import { Cigarette } from "../element/cigarette";
import { Food } from "../element/food";

export interface TaxVisitorProtocol {
    calculateTaxesForFood(food: Food ): number
    calculateTaxesForCigarette(Cigarette: Cigarette ): number
    calculateTaxesForAlcoholicDrink(AlcoholicDrink: AlcoholicDrink ): number
}