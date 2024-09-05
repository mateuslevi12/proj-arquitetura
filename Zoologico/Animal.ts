import { Dieta } from "./Dieta";

export class Animal {
    nome: string;
    dieta: Dieta;

    constructor(nome: string, dieta: Dieta) {
        this.nome = nome;
        this.dieta = dieta;
    }
    obterDieta() {
        return this.dieta.obterDieta();
    }
}