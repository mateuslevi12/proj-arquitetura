export class Pagamento {
    private valor: number;
    private metodo: string;

    constructor(valor: number, metodo: string) {
        this.valor = valor;
        this.metodo = metodo;
    }

    public getValor(): number {
        return this.valor;
    }

    public getMetodo(): string {
        return this.metodo;
    }
}
