import { Pizzaria } from "./pizzaria";
import { Produto } from "./produto";

export class ProdutoPedido {
    pizzaria: Pizzaria
    produto: Produto

    constructor(data: ProdutoPedido) {
        this.pizzaria = data.pizzaria
        this.produto = data.produto
    }
}