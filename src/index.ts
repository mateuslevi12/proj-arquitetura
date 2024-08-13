import { Cliente } from "./cliente";
import { Ingrediente } from "./ingrediente";
import { Pedido } from "./pedido";
import { Pizza } from "./pizza";
import { Pizzaria } from "./pizzaria";

const mussarela = new Ingrediente('mussarela', '200g')
const molho = new Ingrediente('molho de tomate', '100g')
const oregano = new Ingrediente('oregano', '10g')

const pizzaMussarela = new Pizza({
    id: 1,
    sabor: 'mussarela',
    tamanho: 'grande',
    nome: '',
    valor: 20,
})

pizzaMussarela.adicionarIngrediente(mussarela)
pizzaMussarela.adicionarIngrediente(molho)
pizzaMussarela.adicionarIngrediente(oregano)

const pizzariaUnifor = new Pizzaria({
    endereco: 'Rua pizzaria',
    nome: 'Pizzaria unifor',
    telefone: '(11) 9999-9999'
})

pizzariaUnifor.adicionarProduto(pizzaMussarela)

const cliente = new Cliente({
    nome: 'Mateus',
    endereco: 'Rua cliente',
    telefone: '(11) 8888-8888'
})

const pedido = new Pedido({
    cliente: cliente,
    numero: 1,
})

cliente.adicionarPedido(pedido)
pizzariaUnifor.adicionarPedido(pedido)

pizzariaUnifor.menu.map(pizza => (
    pedido.adicionarProduto(pizza)
))

pizzariaUnifor.toString()