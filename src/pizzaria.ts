import { Pedido } from "./pedido";
import { Produto } from "./produto";

export class Pizzaria {
    nome: string;
    endereco: string;
    telefone: string;
    menu: Produto[];
    pedidos: Pedido[]

    constructor(data: Partial<Pizzaria>) {
        this.endereco = data.endereco || '';
        this.telefone = data.telefone || '';
        this.menu = data.menu || [];
        this.nome = data.nome || "Pizzaria Default";
        this.pedidos = data.pedidos || [];
    }

    adicionarProduto(produto: Produto) {
        this.menu.push(produto);
    }

    receberPedido(pedido: Pedido) {
        this.pedidos.push(pedido);
    }

    toString(): string {
        return this.menu.map(i => i.toString()).join(', ');
    }
}