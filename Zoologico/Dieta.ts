export class Dieta {
    tipoAlimento: string;
    quantidadeDiaria: number;

    constructor(tipoAlimento: string, quantidadeDiaria: number) {
        this.tipoAlimento = tipoAlimento;
        this.quantidadeDiaria = quantidadeDiaria;
    }

    obterDieta() {
        return `${this.quantidadeDiaria}, ${this.tipoAlimento}`
      }
}