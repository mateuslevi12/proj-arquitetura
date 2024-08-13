import { ProcessadorPagamento } from "./interfaces/ProcessarPagamento";

export class ProcessadorDePagamentos {
    processar(conta: ProcessadorPagamento, valor: number):void {
        conta.processarPagamento(valor);
    }
}
