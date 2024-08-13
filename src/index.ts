import { Bebida } from "./bebida";
import { Cliente } from "./cliente";
import { Ingrediente } from "./ingrediente";
import { Pizza } from "./pizza";
import { Pizzaria } from "./pizzaria";

const mussarela = new Ingrediente('mussarela', '200g')
const molho = new Ingrediente('molho de tomate', '100g')
const oregano = new Ingrediente('oregano', '10g')

const pizzaMussarela = new Pizza({
    id: 1,
    sabor: 'mussarela',
    tamanho: 'grande',
    nome: 'pizza de mussarela',
    valor: 20,
})

pizzaMussarela.adicionarIngrediente(mussarela)
pizzaMussarela.adicionarIngrediente(molho)
pizzaMussarela.adicionarIngrediente(oregano)

const bebida = new Bebida({
    nome: 'coca cola',
    quantidade: '500ml',
    valor: 8,
})


const pizzariaUnifor = new Pizzaria({
    endereco: 'Rua pizzaria',
    nome: 'Pizzaria unifor',
    telefone: '(11) 9999-9999'
})

pizzariaUnifor.adicionarProduto(pizzaMussarela)
pizzariaUnifor.adicionarProduto(bebida)

const cliente = new Cliente({
    nome: 'Mateus',
    endereco: 'Rua cliente',
    telefone: '(11) 8888-8888'
})

cliente.realizarPedido([pizzariaUnifor.menu[0], pizzariaUnifor.menu[1]], pizzariaUnifor)

cliente.listarPedidos()