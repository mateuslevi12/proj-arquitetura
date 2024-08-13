export class Produto {
    nome: string;
    valor: number;

    constructor(data: Partial<Produto>) {
        this.nome = data.nome;
        this.valor = data.valor;
    }
}