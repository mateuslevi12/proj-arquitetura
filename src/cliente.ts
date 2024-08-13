import { Pedido } from "./pedido";
import { Pizzaria } from "./pizzaria";

export class Cliente {
    nome: string;
    endereco: string;
    telefone: string;
    pedidos: Pedido[]

    constructor(data: Partial<Cliente>) {
        this.nome = data.nome || '';
        this.endereco = data.endereco || '';
        this.telefone = data.telefone || '';
        this.pedidos = data.pedidos || [];
    }

    realizarPedido(pedido: Pedido, pizzaria: Pizzaria): void {
        const pedidoRealizado = new Pedido(pedido);
        new Pizzaria(pizzaria).receberPedido(pedido)

        this.pedidos.push(pedidoRealizado);
    }
}