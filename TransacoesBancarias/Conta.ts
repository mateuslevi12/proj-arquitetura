export abstract class Conta {
    saldo: number;
    
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    abstract processarPagamento(valor: number): void
}