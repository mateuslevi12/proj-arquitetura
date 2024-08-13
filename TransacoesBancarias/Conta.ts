import { ProcessadorPagamento } from "./interfaces/ProcessarPagamento";

export abstract class Conta implements ProcessadorPagamento {
    saldo: number;
    
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    abstract processarPagamento(valor: number): void
}