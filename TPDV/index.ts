import { Pagamento } from "./Pagamento";
import { TPDV } from "./TPDV";
import { Venda } from "./Venda";

const tpdv = new TPDV();

const venda1 = new Venda(100.0)

const pagamento1 = new Pagamento(60.0, 'Boleto')
const pagamento2 = new Pagamento(40.0, 'Pix')

venda1.adicionarPagamento(pagamento1)
venda1.adicionarPagamento(pagamento2)

tpdv.registrarVenda(venda1)

console.log('Valor total da venda:', venda1.getValorTotal())
console.log('Venda paga?', venda1.estaPaga() ? 'Sim' : 'Não')

for (const pagamento of venda1.getPagamentos()) {
  console.log('Pagamento no valor de', pagamento.getValor(), 'usando', pagamento.getMetodo())
}

console.log('\nVendas registradas no TPDV:')

for (const venda of tpdv.getVendas()) {
  console.log('Venda de valor', venda.getValorTotal(), ', paga por completo?', venda.estaPaga() ? 'Sim' : 'Não')
}