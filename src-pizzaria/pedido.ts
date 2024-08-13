import { Cliente } from "./cliente"
import { Pizzaria } from "./pizzaria"
import { ProdutoPedido } from "./produtoPedido"

export class Pedido {
    private numero: number = Math.floor(Math.random() * 1000000) + 1;
    cliente: Cliente
    private produtos: ProdutoPedido[] = []
    private valorTotal: number

    constructor(data: Partial<Pedido>) {
        this.cliente = data.cliente || new Cliente({
            endereco: '',
            telefone: '',
            pedidos: [],
            nome: ''
        })
    }

    adicionarProduto(produto: ProdutoPedido) {
        this.produtos.push(produto)
        this.calcularTotal();
    }

    removerProduto(produto: ProdutoPedido): void {
        this.produtos = this.produtos.filter((p) => p.produto.nome !== produto.produto.nome);
        this.calcularTotal();
    }

    calcularTotal(): void {
        this.valorTotal = this.produtos.reduce((total, produto) => total + produto.produto.valor, 0);
    }

    getNumeroPedido() {
        return this.numero
    }

    getValorTotal() {
        return this.valorTotal;
    }

    getProdutosPedido() {
        return this.produtos.map(produto => `${produto.produto.nome} | ${produto.produto.valor}`);
    }


}
