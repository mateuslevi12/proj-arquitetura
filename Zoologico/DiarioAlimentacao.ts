import { Animal } from "./Animal";
import { RegistroAlimentacao } from "./RegistroAlimentacao";

export class DiarioAlimentacao {
    registros: RegistroAlimentacao[];

    constructor() {
        this.registros = [];
    }

    registrarAlimentacao(animal: Animal, data: Date) {
        const novoRegistro = new RegistroAlimentacao(animal, data, animal.dieta.quantidadeDiaria);
        this.registros.push(novoRegistro);
    }

    listarRegistros(): void {
        this.registros.forEach(registro => {
            console.log(registro.obterResumoAlimentacao());
        });
    }
  }