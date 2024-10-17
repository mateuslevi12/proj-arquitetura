import { BrazilTaxVisitor } from './visitor/brazil-tax-visitor';
import { AlcoholicDrink } from './element/alcoholic-drink';
import { Cigarette } from "./element/cigarette";
import { Food } from "./element/food";

const food = new Food(10)
const cigarette = new Cigarette(5)
const alcoholicDrink = new AlcoholicDrink(8)

const cart = [food, cigarette, alcoholicDrink]

const brazilTaxVisitor = new BrazilTaxVisitor()

const totalWithTax = cart.reduce((total, item) => total + item.getPriceWithTaxes(brazilTaxVisitor), 0)

console.log('Total price with taxes:', totalWithTax)