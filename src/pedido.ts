import { Cliente } from "./cliente"
import { Pizza } from "./pizza"
import { Produto } from "./produto"
import { ProdutoPedido } from "./produtoPedido"

export class Pedido {
    numero: number
    cliente: Cliente
    private produtos: ProdutoPedido[] = []
    private valorTotal: number

    constructor(data: Partial<Pedido>) {
        this.numero = data.numero || 0
        this.cliente = data.cliente || new Cliente({
            endereco: '',
            telefone: '',
            pedidos: [],
            nome: ''
        })
    }

    getValorTotal() {
        return this.valorTotal;
    }

    getProdutosPedido() {
        return this.produtos.forEach(produto => {
            `${produto.produto.nome} | ${produto.produto.valor}`
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
}
