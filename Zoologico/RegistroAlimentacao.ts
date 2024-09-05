import { Animal } from "./Animal";

export class RegistroAlimentacao {
    animal: Animal;
    data: Date;
    quantidadeAlimento: number;
    
    constructor(animal: Animal, data: Date, quantidadeAlimento: number) {
        this.animal = animal;
        this.data = data;
        this.quantidadeAlimento = quantidadeAlimento;
    }

    obterResumoAlimentacao() {
        return {
            animal: this.animal.nome,
            data: this.data.toLocaleDateString('pt-BR'),
            quantidadeAlimento: this.quantidadeAlimento.toFixed(2),
        };
    }
}