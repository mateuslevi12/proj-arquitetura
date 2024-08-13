import { Pedido } from "./pedido";
import { Pizzaria } from "./pizzaria";
import { Produto } from "./produto";
import { ProdutoPedido } from "./produtoPedido";

export class Cliente {
    nome: string;
    endereco: string;
    telefone: string;
    pedidos: Pedido[]

    constructor(data: Partial<Cliente>) {
        this.nome = data.nome;
        this.endereco = data.endereco;
        this.telefone = data.telefone;
        this.pedidos = data.pedidos;
    }

    realizarPedido(produtos: Produto[], pizzaria: Pizzaria): void {
        const pedidoRealizado = new Pedido({
            cliente: this,
        });

        produtos.forEach((produto) => {
            pedidoRealizado.adicionarProduto(new ProdutoPedido({
                pizzaria,
                produto,
            }));
        })
        
        new Pizzaria(pizzaria).receberPedido(pedidoRealizado)

        this.pedidos.push(pedidoRealizado);
    }

    listarPedidos() {
        return this.pedidos.forEach((pedido) => {
            console.log(`Pedido Nº: ${pedido.getNumeroPedido()}.\n Produtos: ${pedido.getProdutosPedido().join(', ')}`);
        });
    }
}