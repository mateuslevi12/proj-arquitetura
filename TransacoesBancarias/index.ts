import { ContaPoupanca } from './ContaPoupanca';
import { ContaCorrente } from "./ContaCorrente";
import { ProcessadorDePagamentos } from './ProcessadorDePagamentos';

try {
    const contaCorrente = new ContaCorrente(1500)
    const contaPoupanca = new ContaPoupanca(2000)

    const processador = new ProcessadorDePagamentos()

    console.log(`Saldo inicial da corrente: ${contaCorrente.saldo}`)
    processador.processar(contaCorrente, 1000)
    console.log(`Saldo final da corrente: ${contaCorrente.saldo}`)

    console.log(`Saldo inicial da poupanca: ${contaPoupanca.saldo}`)
    processador.processar(contaPoupanca, 1500)
    console.log(`Saldo final da poupanca: ${contaPoupanca.saldo}`)
} catch (error) {
    console.log(error)
}